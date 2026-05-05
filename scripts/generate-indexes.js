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

export async function generateModuleIndex(moduleName) {
  const functionNames = await listFunctions(moduleName)
  const moduleDir = join(root, moduleName)
  const moduleIndex = join(moduleDir, 'index.js')
  const moduleTypes = join(moduleDir, 'index.d.ts')
  const source = `${functionNames.map((name) => `export { default as ${name} } from './${name}.js'`).join('\n')}\n`
  const typeSource = source
  await writeFile(moduleIndex, source)
  await writeFile(moduleTypes, typeSource)
}

export async function generateRootIndex() {
  const moduleNames = await listModules()
  const source = `${moduleNames.map((name) => `export * as ${name} from './${name}/index.js'`).join('\n')}\n`
  const types = `${moduleNames.map((name) => `export * as ${name} from './${name}/index.js'`).join('\n')}\n`
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
