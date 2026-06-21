import { readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../src/', import.meta.url))

async function listModules() {
  const entries = await readdir(root, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()
}

async function listFunctions(moduleName) {
  const moduleDir = join(root, moduleName)
  const entries = await readdir(moduleDir, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.js') && entry.name !== 'index.js')
    .map((entry) => entry.name.replace(/\.js$/, ''))
    .sort()
}

const MODULE_DESCRIPTIONS = {
  Func: 'Functional programming utilities (curry, compose, fix, flip, etc.).',
  General: 'General utility functions (id, equals, not, replicate, etc.).',
  List: 'List and array processing functions (map, filter, reduce, fold, zip, etc.).',
  Num: 'Numerical utility functions.',
  Obj: 'Object manipulation utilities (keys, values, merge, map, reduce, etc.).',
  Str: 'String manipulation functions (split, join, capitalize, camelize, startsWith, etc.).',
}

export async function generateModuleIndex(moduleName) {
  const functionNames = await listFunctions(moduleName)
  const moduleDir = join(root, moduleName)
  const moduleIndex = join(moduleDir, 'index.js')
  const moduleTypes = join(moduleDir, 'index.d.ts')

  const description = MODULE_DESCRIPTIONS[moduleName] || ''
  const docblock = [
    '/**',
    ` * ${description}`,
    ' *',
    ' * This module exports the following functions:',
    ...functionNames.map((name) => ` * - {@link ${name}}`),
    ' *',
    ` * @module ${moduleName}`,
    ' */',
    '',
  ].join('\n')

  const exportsSource = `${functionNames.map((name) => `export { default as ${name} } from './${name}.js'`).join('\n')}\n`
  const source = `${docblock}${exportsSource}`
  const typeSource = source
  await writeFile(moduleIndex, source)
  await writeFile(moduleTypes, typeSource)
}

export async function generateRootIndex() {
  const moduleNames = await listModules()
  const docblock = [
    '/**',
    " * A modular, tree-shaking friendly implementation of Haskell's Prelude library in modern JavaScript.",
    ' *',
    ' * This package exports the following modules:',
    ...moduleNames.map((name) => ` * - {@link ${name}}`),
    ' *',
    ' * @module',
    ' */',
    '',
  ].join('\n')

  const exportsSource = `${moduleNames.map((name) => `export * as ${name} from './${name}/index.js'`).join('\n')}\n`
  const source = `${docblock}${exportsSource}`
  const types = `${docblock}${moduleNames.map((name) => `export * as ${name} from './${name}/index.js'`).join('\n')}\n`
  await writeFile(join(root, 'index.js'), source)
  await writeFile(join(root, 'index.d.ts'), types)
}

export async function generateAllIndexes() {
  const moduleNames = await listModules()
  await Promise.all(moduleNames.map(generateModuleIndex))
  await generateRootIndex()
}

if (import.meta.main) {
  await generateAllIndexes()
}
