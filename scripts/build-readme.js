import { readdirSync } from 'fs'

const byName = (a, b) => a.localeCompare(b)

const moduleNames = readdirSync('./src')
  .filter((fn) => fn !== 'index.js')
  .sort(byName)

const low = (x) => x.toLowerCase()
const up = (x) => x.toUpperCase()

function functions(m) {
  return readdirSync(`./src/${m}`)
    .filter((f) => !/index/.test(f))
    .sort(byName)
    .map((f) => f.replace(/(.+)\.js$/, '$1'))
    .map((f) => `\n\t* [${low(f)}](${up(m)}.md#${low(m + f)})`)
    .join('')
}

const modules = moduleNames.map(
  (m) => `\n* [${m}](${up(m)}.md)${functions(m)}`
)

const file = `# Preλude-js :: Docs\n
## Modules\n
${modules.join('')}\n`

console.log(file)
