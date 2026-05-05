import { readFile, readdir, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const lineSignaturePattern = /^\s*\/\/\s*(?:\+\s*)?(.*::.*)\s*$/
const jsdocOpenPattern = /^\s*\/\*\*\s*$/
const jsdocBodyPattern = /^\s*\*\s*`?(.*::.*)`?\s*$/
const jsdocClosePattern = /^\s*\*\/\s*$/

export function normalizeSignature(signature, file) {
  const clean = signature.replace(/`/g, '').replace(/→/g, '->').trim()
  return clean.startsWith('::')
    ? `${basename(file || 'signature', '.js')} ${clean}`
    : clean.replace(/\s*::\s*/, ' :: ')
}

export function splitTopLevelArrows(signature) {
  const parts = []
  let current = ''
  let round = 0
  let square = 0
  let curly = 0

  for (let i = 0; i < signature.length; i++) {
    const char = signature[i]
    const next = signature[i + 1]

    if (char === '(') round++
    else if (char === ')') round = Math.max(0, round - 1)
    else if (char === '[') square++
    else if (char === ']') square = Math.max(0, square - 1)
    else if (char === '{') curly++
    else if (char === '}') curly = Math.max(0, curly - 1)

    if (char === '-' && next === '>' && !round && !square && !curly) {
      parts.push(current.trim())
      current = ''
      i++
      continue
    }

    current += char
  }

  if (current.trim()) parts.push(current.trim())
  return parts
}

export function parseSignature(signature, file) {
  const normalized = normalizeSignature(signature, file)
  const [name, ...rest] = normalized.split(' :: ')
  const types = splitTopLevelArrows(rest.join(' :: '))
  return { name, signature: normalized, params: types.slice(0, -1), returns: types.at(-1) || '' }
}

export function renderTsdoc({ signature, params, returns }) {
  const lines = ['/**', ' * @remarks', ' *', ' * ```text', ` * ${signature}`, ' * ```']

  if (params.length) {
    lines.push(' *', ...params.map((type, index) => ` * @param arg${index + 1} - \`${type}\``))
  }

  if (returns) lines.push(' *', ` * @returns \`${returns}\``)
  lines.push(' */')
  return lines.join('\n')
}

export const compileSignature = (signature, file) => renderTsdoc(parseSignature(signature, file))

export function convertSource(source, file) {
  const lines = source.split('\n')
  let changed = false

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '/**' && lines[i + 1] === ' * @remarks') {
      let end = i + 1
      while (end < lines.length && lines[end] !== ' */') end++
      const block = lines.slice(i, end + 1)

      if (block.some((line) => line.includes('@param') || line.includes('@returns'))) {
        i = end
        continue
      }

      if (lines[i + 3] === ' * ```text' && lines[i + 5] === ' * ```') {
        lines.splice(
          i,
          7,
          ...compileSignature(lines[i + 4].replace(/^\s*\*\s*/, ''), file).split('\n'),
        )
        changed = true
      }

      continue
    }

    const lineMatch = lines[i].match(lineSignaturePattern)
    if (lineMatch) {
      const compiled = compileSignature(lineMatch[1], file).split('\n')
      lines.splice(i, 1, ...compiled)
      i += compiled.length - 1
      changed = true
      continue
    }

    const open = lines[i].match(jsdocOpenPattern)
    const body = lines[i + 1]?.match(jsdocBodyPattern)
    const close = lines[i + 2]?.match(jsdocClosePattern)

    if (open && body && close) {
      const compiled = compileSignature(body[1], file).split('\n')
      lines.splice(i, 3, ...compiled)
      i += compiled.length - 1
      changed = true
    }
  }

  return changed ? lines.join('\n') : null
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const dirs = []
  const files = []

  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) dirs.push(path)
    else if (entry.isFile() && path.endsWith('.js')) files.push(path)
  }

  return [...files, ...(await Promise.all(dirs.map(walk))).flat()]
}

if (import.meta.main) {
  const root = fileURLToPath(new URL('../src/', import.meta.url))
  for (const file of await walk(root)) {
    const source = await readFile(file, 'utf8')
    const converted = convertSource(source, file)
    if (converted !== null && converted !== source) {
      await writeFile(file, converted)
      console.log(`updated ${file}`)
    }
  }
}
