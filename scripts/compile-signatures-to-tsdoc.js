import { readdir, readFile, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { fileURLToPath } from 'node:url'

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
    return `${basename(file, '.js')} ${clean}`
  }

  return clean.replace(/\s*::\s*/, ' :: ')
}

function compileSignature(signature) {
  return ['/**', ' * @remarks', ' *', ' * ```text', ` * ${signature}`, ' * ```', ' */'].join('\n')
}

function isCompiledBlock(lines, index) {
  return (
    lines[index] === '/**' &&
    lines[index + 1] === ' * @remarks' &&
    lines[index + 2] === ' *' &&
    lines[index + 3] === ' * ```text' &&
    lines[index + 5] === ' * ```' &&
    lines[index + 6] === ' */'
  )
}

function convertSource(source, file) {
  const lines = source.split('\n')
  let changed = false

  for (let index = 0; index < lines.length; index++) {
    if (isCompiledBlock(lines, index)) {
      const signature = normalizeSignature(lines[index + 4].replace(/^\s*\*\s*/, ''), file)
      const compiled = compileSignature(signature).split('\n')

      if (lines.slice(index, index + 7).join('\n') !== compiled.join('\n')) {
        lines.splice(index, 7, ...compiled)
        changed = true
      }

      index += 6
      continue
    }

    const lineMatch = lines[index].match(lineSignaturePattern)
    if (lineMatch) {
      const signature = normalizeSignature(lineMatch[1], file)
      lines.splice(index, 1, ...compileSignature(signature).split('\n'))
      index += 6
      changed = true
      continue
    }

    if (index + 2 >= lines.length) continue

    const open = lines[index].match(jsdocSignatureOpenPattern)
    const body = lines[index + 1].match(jsdocSignatureBodyPattern)
    const close = lines[index + 2].match(jsdocSignatureClosePattern)

    if (open && body && close) {
      const signature = normalizeSignature(body[1], file)
      lines.splice(index, 3, ...compileSignature(signature).split('\n'))
      index += 6
      changed = true
    }
  }

  return changed ? lines.join('\n') : null
}

export { compileSignature, convertSource, normalizeSignature }

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
