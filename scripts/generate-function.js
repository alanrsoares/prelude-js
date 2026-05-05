import { mkdir, readFile, writeFile } from 'node:fs/promises'

const MODULES = new Set(['Func', 'General', 'List', 'Num', 'Obj', 'Str'])
const RESERVED = new Set([
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'function',
  'if',
  'import',
  'in',
  'instanceof',
  'let',
  'new',
  'null',
  'return',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
])

const [moduleName, functionName] = process.argv.slice(2)

if (!moduleName || !functionName) {
  console.error('Usage: bun run generate:function <Module> <name>')
  process.exit(1)
}

if (!MODULES.has(moduleName)) {
  console.error(`Unknown module "${moduleName}". Expected one of: ${[...MODULES].join(', ')}`)
  process.exit(1)
}

if (!/^[a-z][A-Za-z0-9]*$/.test(functionName)) {
  console.error('Use lowerCamelCase names, starting with a letter.')
  process.exit(1)
}

if (RESERVED.has(functionName)) {
  console.error(`"${functionName}" is a reserved word. Use a non-reserved function name instead.`)
  process.exit(1)
}

const moduleDir = new URL(`../src/${moduleName}/`, import.meta.url)
const moduleIndex = new URL('index.js', moduleDir)
const functionFile = new URL(`${functionName}.js`, moduleDir)

const jsdocTemplate = `/**
 * @remarks
 *
 * \`\`\`text
 * ${functionName} :: a -> a
 * \`\`\`
 *
 * @param arg1 - \`a\`
 *
 * @returns \`a\`
 */
export default function ${functionName} () {
  throw new Error('Not implemented')
}
`

const indexSource = await readFile(moduleIndex, 'utf8')
const exportLine = `  ${functionName},`

if (indexSource.includes(`./${functionName}.js`)) {
  console.error(`Function "${functionName}" already exists in ${moduleName}`)
  process.exit(1)
}

const updatedImports = indexSource.replace(
  /\n\nexport default \{\n/,
  `\nimport ${functionName} from './${functionName}.js'\n\nexport default {\n`,
)
const updatedIndex = updatedImports.replace(
  /export default \{\n/,
  `export default {\n${exportLine}\n`,
)

await mkdir(moduleDir, { recursive: true })
await writeFile(functionFile, jsdocTemplate)
await writeFile(moduleIndex, updatedIndex)

console.log(`added ${functionFile.pathname}`)
console.log(`updated ${moduleIndex.pathname}`)
