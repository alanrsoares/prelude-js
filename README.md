# Preλude-js

A modular implementation of Haskell's Prelude for modern JavaScript.

The repo now targets native ESM and a Bun-first workflow. There is no Babel build step, no generated CommonJS dist in source control, and the package exports point directly at the maintained source files.

See [docs/README.md](./docs/README.md) for the module reference.

## Install

```bash
bun add preludejs
```

```bash
npm install preludejs
```

## Development

```bash
bun install
bun run lint
bun test
```

## Package Layout

- `preludejs` resolves to `src/index.js`.
- `preludejs/List`, `preludejs/Func`, `preludejs/Obj`, and the other module subpaths are exported directly.
- Deep imports such as `preludejs/List/map` are also exported for consumers that want single-function entrypoints.
- Legacy generated module folders are no longer stored in the repository root.

![Prelude-js logo](./logo.png)
