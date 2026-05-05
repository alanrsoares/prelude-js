import { readdir, readFile, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import map from '../src/List/map.js'

const lineSignaturePattern = /^\s*\/\/\s*(?:\+\s*)?(.*::.*)\s*$/
const jsdocSignatureOpenPattern = /^\s*\/\*\*\s*$/
const jsdocSignatureBodyPattern = /^\s*\*\s*`?(.*::.*)`?\s*$/
const jsdocSignatureClosePattern = /^\s*\*\/\s*$/

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const path = join(dir, entry.name)

    if (entry.isDirectory()) {
      files.push(...(await walk(path)))
      continue
    }

    if (entry.isFile() && path.endsWith('.js')) {
      files.push(path)
    }
  }

  return files
}

function normalizeSignature(signature, file) {
  const clean = signature.replace(/`/g, '').replace(/→/g, '->').trim()

  if (clean.startsWith('::')) {
    const inferredName = file ? basename(file, '.js') : 'signature'
    return `${inferredName} ${clean}`
  }

  return clean.replace(/\s*::\s*/, ' :: ')
}

function splitTopLevelArrows(signature) {
  const parts = []
  let current = ''
  let parenDepth = 0
  let bracketDepth = 0
  let braceDepth = 0

  for (let index = 0; index < signature.length; index++) {
    const char = signature[index]
    const next = signature[index + 1]

    if (char === '(') parenDepth++
    if (char === ')') parenDepth = Math.max(0, parenDepth - 1)
    if (char === '[') bracketDepth++
    if (char === ']') bracketDepth = Math.max(0, bracketDepth - 1)
    if (char === '{') braceDepth++
    if (char === '}') braceDepth = Math.max(0, braceDepth - 1)

    if (
      char === '-' &&
      next === '>' &&
      parenDepth === 0 &&
      bracketDepth === 0 &&
      braceDepth === 0
    ) {
      parts.push(current.trim())
      current = ''
      index++
      continue
    }

    current += char
  }

  if (current.trim()) {
    parts.push(current.trim())
  }

  return parts
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

function renderTsdoc(parsed) {
  const lines = ['/**', ' * @remarks', ' *', ' * ```text', ` * ${parsed.signature}`, ' * ```']
  const paramLines = map((type, index) => ` * @param arg${index + 1} - \`${type}\``, parsed.params)

  if (paramLines.length > 0) {
    lines.push(' *', ...paramLines)
  }

  if (parsed.returns) {
    lines.push(' *', ` * @returns \`${parsed.returns}\``)
  }

  lines.push(' */')

  return lines.join('\n')
}

function compileSignature(signature, file) {
  return renderTsdoc(parseSignature(signature, file))
}

function convertSource(source, file) {
  const lines = source.split('\n')
  let changed = false

  for (let index = 0; index < lines.length; index++) {
    if (lines[index] === '/**' && lines[index + 1] === ' * @remarks') {
      let closeIndex = index + 1

      while (closeIndex < lines.length && lines[closeIndex] !== ' */') {
        closeIndex++
      }

      const block = lines.slice(index, closeIndex + 1)
      const hasTags = block.some((line) => line.includes('@param') || line.includes('@returns'))

      if (hasTags) {
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

  return changed ? lines.join('\n') : null
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
