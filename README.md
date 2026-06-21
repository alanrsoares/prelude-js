# Preλude-js

A modular, tree-shaking friendly implementation of Haskell's Prelude library in modern, type-safe JavaScript.

[![CI Status](https://github.com/alanrsoares/prelude-js/actions/workflows/docs.yml/badge.svg)](https://github.com/alanrsoares/prelude-js/actions)
[![JSR](https://jsr.io/badges/@alanrsoares/preludejs)](https://jsr.io/@alanrsoares/preludejs)

It ships as native ESM, keeps the runtime source in `src/` without any legacy top-level compiled output, and is fully compatible with Bun, Node.js, Deno, and modern browsers.

## Features

- **Curried by Default:** Multi-argument functions are curried out of the box to enable elegant function composition and point-free style.
- **Native ESM:** Fully compatible with native resolution runtimes (explicit `.js` extensions preserved in imports).
- **TypeScript Signatures:** Shipped with comprehensive `.d.ts` declaration files for complete IDE autocomplete and compile-time type safety.
- **Tree-Shaking Friendly:** Zero external dependencies. Every function lives in its own file, allowing bundlers to strip out unused helpers.

## Compatibility

Since `prelude-js` is implemented as standard ES modules (ESM) with zero external dependencies, it runs seamlessly across all modern JavaScript environments:

- **Node.js:** `>=20.0.0`
- **Bun:** `>=1.3.13`
- **Deno:** Full native support (installable via JSR)
- **Edge Runtimes:** Cloudflare Workers, Vercel Edge Functions, Netlify Edge
- **Browsers:** Modern browsers natively supporting ESM imports

## Installation

```bash
bun add preludejs
```

or

```bash
npm install preludejs
```

## Import Styles

You can import either namespace barrels directly from the main entrypoint, or target individual files directly for optimal tree-shaking:

### Barrel Imports
```js
import { List, Func, General, Str } from 'preludejs'

List.length([1, 2, 3]) // => 3
Func.const('left', 'right') // => 'left'
Str.capitalize('prelude') // => 'Prelude'
```

### Deep Imports (Optimal Tree-Shaking)
When importing individual functions directly, **always preserve the explicit `.js` extension** to comply with native ESM runtime resolution:
```js
import map from 'preludejs/List/map.js'
import compose from 'preludejs/Func/compose.js'

map((x) => x * 2, [1, 2, 3]) // => [2, 4, 6]
```

## Usage Examples

### 1. Currying & Function Composition
```js
import curry from 'preludejs/Func/curry.js'
import compose from 'preludejs/Func/compose.js'

const add = curry((a, b) => a + b)
const double = (x) => x * 2

// Compose operations right-to-left
const addThenDouble = compose(double, add(2))

addThenDouble(3) // => 10 (double(add(2, 3)))
```

### 2. List Operations
```js
import filter from 'preludejs/List/filter.js'
import reduce from 'preludejs/List/reduce.js'

const isEven = (x) => x % 2 === 0
const sum = (acc, x) => acc + x

const evens = filter(isEven, [1, 2, 3, 4]) // => [2, 4]
reduce(sum, 0, evens) // => 6
```

## Layout

- `preludejs` resolves to `src/index.js`.
- Barrel modules export namespaces: `Func`, `General`, `List`, `Num`, `Obj`, `Str`.
- Direct imports map directly to the function's runtime module (e.g. `preludejs/List/map.js` maps to `src/List/map.js`).

For the complete API reference, see [docs/README.md](./docs/README.md).

---

![Prelude-js logo](./logo.png)
