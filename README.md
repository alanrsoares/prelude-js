# Preλude-js

A modular implementation of Haskell's Prelude for modern JavaScript.

It ships as native ESM, runs on Bun or Node 20+, and keeps the runtime source in `src/` without a generated CommonJS dist in the repo.

## Why

- Small, composable helpers that feel close to Prelude semantics.
- Direct module and deep-function exports for focused imports.
- Bun-first tooling for install, test, docs, and generator workflows.

## Install

```bash
bun add preludejs
```

```bash
npm install preludejs
```

## Usage

```js
import Prelude, { List, Func, General } from 'preludejs'
import map from 'preludejs/List/map'

Prelude.List.length([1, 2, 3]) // 3
List.elem(2, [1, 2, 3]) // true
Func.const('left', 'right') // 'left'
General.snd(['first', 'second']) // 'second'
map((x) => x * 2, [1, 2, 3]) // [2, 4, 6]
```

## Develop

```bash
bun install
bun run check
bun run docs
```

## Layout

- `preludejs` resolves to `src/index.js`.
- `preludejs/List`, `preludejs/Func`, `preludejs/Obj`, and the other module subpaths are exported directly.
- Deep imports such as `preludejs/List/map` are also exported for consumers that want single-function entrypoints.
- Legacy generated module folders are not stored in the repository root.

See [docs/README.md](./docs/README.md) for the module reference.

![Prelude-js logo](./logo.png)
