import fs from 'fs';
import minimist from 'minimist';

const ARGS = minimist(process.argv.slice(2));
const MODULE_PATH = `./src/${ ARGS.module }`;
const fns = fs.readdirSync(MODULE_PATH)
              .map((i) => i.replace(/(.+)\.js$/, '$1'))
              .filter((fn) => fn !== 'index');

const imports = fns.map((fn) => `import ${ fn } from './${ fn }'` ).join(';\n');
const file =
`${ imports };\n
export default {
  ${ fns.join(',\n  ') }
};\n`;

console.log(file);
