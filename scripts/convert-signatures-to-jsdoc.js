import { readdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { basename } from 'node:path'
import { join } from 'node:path'

const signaturePattern = /^\s*\/\/\s*(?:\+\s*)?(.*::.*)\s*$/

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
  const clean = signature.replace(/→/g, '->')

  if (clean.startsWith('::')) {
    return `${basename(file, '.js')} ${clean}`
  }

  return clean
}

function convertSource(source, file) {
  const lines = source.split('\n')
  let changed = false

  for (let index = 0; index < lines.length; index++) {
    const match = lines[index].match(signaturePattern)
    if (!match) continue

    const signature = normalizeSignature(match[1].trim(), file)
    lines.splice(index, 1, '/**', ` * \`${signature}\``, ' */')
    index += 2
    changed = true
  }

  return changed ? lines.join('\n') : null
}

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
