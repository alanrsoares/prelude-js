import js from '@eslint/js'
import globals from 'globals'

export default [
  {
    ignores: ['docs/*.md', 'Func/**', 'General/**', 'List/**', 'Num/**', 'Obj/**', 'Str/**', 'coverage/**', 'node_modules/**']
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2024
      }
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    }
  }
]
