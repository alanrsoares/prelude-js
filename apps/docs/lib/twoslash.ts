import { resolve } from 'node:path'
import ts from 'typescript'

// Resolve preludejs to source (not built dist) so hover types never go stale.
const repoRoot = resolve(process.cwd(), '../..')

export const twoslashCompilerOptions = {
  baseUrl: repoRoot,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  module: ts.ModuleKind.ESNext,
  target: ts.ScriptTarget.ES2022,
  strict: true,
  paths: {
    preludejs: ['src/index.js'],
    'preludejs/Func/*': ['src/Func/*'],
    'preludejs/General/*': ['src/General/*'],
    'preludejs/List/*': ['src/List/*'],
    'preludejs/Num/*': ['src/Num/*'],
    'preludejs/Obj/*': ['src/Obj/*'],
    'preludejs/Str/*': ['src/Str/*'],
  },
}
