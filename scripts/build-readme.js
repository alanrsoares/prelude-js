const fs = require('fs');

const moduleNames = fs.readdirSync('./src')
                      .filter((fn) => fn !== 'index.js');

const low = (x) => x.toLowerCase();
const up = (x) => x.toUpperCase();

function functions(m) {
  return fs.readdirSync(`./src/${ m }`)
           .filter((f) => !/index/.test(f))
           .map((f) => f.replace(/(.+)\.js$/, '$1'))
           .map((f) => `\n\t* [${ low(f) }](${ up(m) }.md#${ low(m + f) })`)
           .join('');
}

const modules = moduleNames.map((m) => `\n* [${ m }](${ up(m) }.md)${ functions(m) }`);

const file =
`# Preλude-js :: Docs\n
## Modules\n
${ modules.join('') }`;

console.log(file);
