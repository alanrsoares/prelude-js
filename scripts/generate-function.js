import nodePlop from 'node-plop'

const [moduleName, functionName] = process.argv.slice(2)

if (!moduleName || !functionName) {
  console.error('Usage: bun run generate:function <Module> <name>')
  process.exit(1)
}

const plop = await nodePlop('./plopfile.cjs')
const generator = plop.getGenerator('function')
const { changes, failures } = await generator.runActions({
  module: moduleName,
  name: functionName,
})

if (failures.length) {
  failures.forEach((failure) => {
    console.error(failure.error || failure.message || failure)
  })
  process.exit(1)
}

changes.forEach(({ path, type }) => {
  console.log(`${type} ${path}`)
})
