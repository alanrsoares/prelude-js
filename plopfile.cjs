const MODULES = ['Func', 'General', 'List', 'Num', 'Obj', 'Str']

module.exports = function (plop) {
  plop.setGenerator('function', {
    description: 'Generate a new function and register it in a module index',
    prompts: [
      {
        type: 'list',
        name: 'module',
        message: 'Which module should receive the new function?',
        choices: MODULES
      },
      {
        type: 'input',
        name: 'name',
        message: 'Function name',
        validate(value) {
          return /^[a-z][A-Za-z0-9]*$/.test(value)
            ? true
            : 'Use lowerCamelCase names, starting with a letter.'
        }
      }
    ],
    actions(data) {
      const moduleIndex = `src/${data.module}/index.js`
      const importPattern = /(import .* from '.*'\n)(?!import )/g
      const exportPattern = /export default \{\n/

      return [
        {
          type: 'add',
          path: `src/${data.module}/{{name}}.js`,
          templateFile: 'templates/function.js.hbs',
          abortOnFail: true
        },
        {
          type: 'modify',
          path: moduleIndex,
          pattern: importPattern,
          template: "$1import {{name}} from './{{name}}.js'\n"
        },
        {
          type: 'modify',
          path: moduleIndex,
          pattern: exportPattern,
          template: "export default {\n  {{name}},\n"
        }
      ]
    }
  })
}
