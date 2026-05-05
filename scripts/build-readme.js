import { readdirSync } from 'node:fs'

const byName = (a, b) => a.localeCompare(b)

const moduleNames = readdirSync('./src', { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort(byName)

const low = (x) => x.toLowerCase()
const up = (x) => x.toUpperCase()

function functions(m) {
  return readdirSync(`./src/${m}`, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.js'))
    .map((entry) => entry.name)
    .filter((f) => f !== 'index.js')
    .sort(byName)
    .map((f) => f.replace(/(.+)\.js$/, '$1'))
    .map((f) => `\n\t* [${low(f)}](${up(m)}.md#${low(m + f)})`)
    .join('')
}

const modules = moduleNames.map((m) => `\n* [${m}](${up(m)}.md)${functions(m)}`)

const file = `# Preλude-js :: Docs\n
## Modules\n
${modules.join('')}\n`

console.log(file)
