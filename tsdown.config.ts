import { defineConfig } from 'tsdown'

// Per-file (unbundled) build so every function keeps its own granular subpath
// export and stays tree-shakeable. Emits ESM + CJS + .d.ts mirroring src/.
export default defineConfig({
  entry: ['src/**/*.ts', '!src/**/*.d.ts'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  // type:module package -> ESM keeps .js, CJS uses .cjs.
  outExtensions: ({ format }) => ({ js: format === 'es' ? '.js' : '.cjs' }),
  dts: true,
  unbundle: true,
  clean: true,
  treeshake: true,
  target: 'es2022',
})
