import { readFile, readdir, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import Func from '../src/Func/index.js'
import List from '../src/List/index.js'

const { compose, deny } = Func
const { any, map, reduce } = List

const lineSignaturePattern = /^\s*\/\/\s*(?:\+\s*)?(.*::.*)\s*$/
const jsdocSignatureOpenPattern = /^\s*\/\*\*\s*$/
const jsdocSignatureBodyPattern = /^\s*\*\s*`?(.*::.*)`?\s*$/
const jsdocSignatureClosePattern = /^\s*\*\/\s*$/

const stripTicks = (signature) => signature.replace(/`/g, '')
const normalizeArrows = (signature) => signature.replace(/→/g, '->')
const trimSignature = (signature) => signature.trim()
const normalizeSignatureSpacing = (signature) => signature.replace(/\s*::\s*/, ' :: ')
const normalizeCore = compose(normalizeSignatureSpacing, trimSignature, normalizeArrows, stripTicks)

const isDocTagLine = (line) => line.includes('@param') || line.includes('@returns')
const hasDocTags = any(isDocTagLine)
const lacksDocTags = deny(hasDocTags)

const splitLines = (source) => source.split('\n')
const joinLines = (lines) => lines.join('\n')
function normalizeSignature(signature, file) {
  const clean = normalizeCore(signature)
  const trimmed = clean.trim()

  if (trimmed.startsWith('::')) {
    const inferredName = file ? basename(file, '.js') : 'signature'
    return `${inferredName} ${trimmed}`
  }

  return trimmed
}

function splitTopLevelArrows(signature) {
  const step = (state, char) => {
    if (state.pendingDash) {
      if (
        char === '>' &&
        state.parenDepth === 0 &&
        state.bracketDepth === 0 &&
        state.braceDepth === 0
      ) {
        return {
          ...state,
          parts: [...state.parts, state.current.trim()],
          current: '',
          pendingDash: false,
        }
      }

      return {
        ...state,
        current: `${state.current}-${char}`,
        pendingDash: false,
      }
    }

    if (char === '-') {
      return { ...state, pendingDash: true }
    }

    return {
      ...state,
      current: state.current + char,
      parenDepth:
        char === '('
          ? state.parenDepth + 1
          : char === ')'
            ? Math.max(0, state.parenDepth - 1)
            : state.parenDepth,
      bracketDepth:
        char === '['
          ? state.bracketDepth + 1
          : char === ']'
            ? Math.max(0, state.bracketDepth - 1)
            : state.bracketDepth,
      braceDepth:
        char === '{'
          ? state.braceDepth + 1
          : char === '}'
            ? Math.max(0, state.braceDepth - 1)
            : state.braceDepth,
    }
  }

  const finish = (state) => {
    const completed = state.pendingDash ? `${state.current}-` : state.current
    return completed.trim() ? [...state.parts, completed.trim()] : state.parts
  }

  return finish(
    reduce(
      step,
      {
        parts: [],
        current: '',
        parenDepth: 0,
        bracketDepth: 0,
        braceDepth: 0,
        pendingDash: false,
      },
      signature.split(''),
    ),
  )
}

function parseSignature(signature, file) {
  const normalized = normalizeSignature(signature, file)
  const [name, ...rest] = normalized.split(' :: ')
  const typeExpression = rest.join(' :: ')
  const parts = splitTopLevelArrows(typeExpression)
  const params = parts.length > 1 ? parts.slice(0, -1) : []
  const returns = parts.at(-1) || typeExpression

  return { name, params, returns, signature: normalized }
}

const paramLine = (type, index) => ` * @param arg${index + 1} - \`${type}\``

function renderTsdoc(parsed) {
  const lines = ['/**', ' * @remarks', ' *', ' * ```text', ` * ${parsed.signature}`, ' * ```']
  const paramLines = map(paramLine, parsed.params)
  const withParams = paramLines.length > 0 ? [...lines, ' *', ...paramLines] : lines
  const withReturns = parsed.returns
    ? [...withParams, ' *', ` * @returns \`${parsed.returns}\``]
    : withParams

  return joinLines([...withReturns, ' */'])
}

function compileSignature(signature, file) {
  return renderTsdoc(parseSignature(signature, file))
}

function convertSource(source, file) {
  const lines = splitLines(source)
  let changed = false

  for (let index = 0; index < lines.length; index++) {
    if (lines[index] === '/**' && lines[index + 1] === ' * @remarks') {
      let closeIndex = index + 1

      while (closeIndex < lines.length && lines[closeIndex] !== ' */') {
        closeIndex++
      }

      const block = lines.slice(index, closeIndex + 1)

      if (!lacksDocTags(block)) {
        index = closeIndex
        continue
      }

      if (lines[index + 3] === ' * ```text' && lines[index + 5] === ' * ```') {
        const signature = normalizeSignature(lines[index + 4].replace(/^\s*\*\s*/, ''), file)
        const compiled = compileSignature(signature, file).split('\n')

        lines.splice(index, 7, ...compiled)
        index += compiled.length - 1
        changed = true
      }

      continue
    }

    const lineMatch = lines[index].match(lineSignaturePattern)
    if (lineMatch) {
      const signature = normalizeSignature(lineMatch[1], file)
      const compiled = compileSignature(signature, file).split('\n')
      lines.splice(index, 1, ...compiled)
      index += compiled.length - 1
      changed = true
      continue
    }

    if (index + 2 >= lines.length) continue

    const open = lines[index].match(jsdocSignatureOpenPattern)
    const body = lines[index + 1].match(jsdocSignatureBodyPattern)
    const close = lines[index + 2].match(jsdocSignatureClosePattern)

    if (open && body && close) {
      const signature = normalizeSignature(body[1], file)
      const compiled = compileSignature(signature, file).split('\n')
      lines.splice(index, 3, ...compiled)
      index += compiled.length - 1
      changed = true
    }
  }

  return changed ? joinLines(lines) : null
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const { files, dirs } = reduce(
    (state, entry) => {
      const path = join(dir, entry.name)

      if (entry.isDirectory()) {
        return { ...state, dirs: [...state.dirs, path] }
      }

      if (entry.isFile() && path.endsWith('.js')) {
        return { ...state, files: [...state.files, path] }
      }

      return state
    },
    { files: [], dirs: [] },
    entries,
  )

  const nested = await Promise.all(map(walk, dirs))

  return [...files, ...nested.flat()]
}

export {
  compileSignature,
  convertSource,
  normalizeSignature,
  parseSignature,
  renderTsdoc,
  splitTopLevelArrows,
}

if (import.meta.main) {
  const root = fileURLToPath(new URL('../src/', import.meta.url))
  const files = await walk(root)

  for (const file of files) {
    const source = await readFile(file, 'utf8')
    const converted = convertSource(source, file)

    if (converted !== null && converted !== source) {
      await writeFile(file, converted)
      console.log(`updated ${file}`)
    }
  }
}
