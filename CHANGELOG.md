# Changelog

## 1.0.0 - 2026-05-05

- Migrated the library to native ESM with explicit `.js` specifiers and cleaned up the package exports surface.
- Switched project tooling to Bun for install, test, coverage, and prepack workflows.
- Replaced ad hoc code generation with a `plop`-based generator.
- Removed legacy Babel, Travis, pnpm lockfile, and old dist/release scripts.
- Moved tests to Bun's native runner and built-in assertions.
- Restored missing `List` and `Str` module implementations that were previously stubbed or empty in `src/`.

### Breaking Changes

- The package now targets Bun-first workflows and a modern runtime baseline: `bun >= 1.3.13` and `node >= 20`.
- Legacy transpiled/CommonJS-oriented workflows and the old generated dist layout are no longer part of the repo.
- Consumers depending on undocumented import behavior should revalidate against the exported ESM entrypoints.
