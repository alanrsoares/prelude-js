#!/usr/bin/env bun
/**
 * Compile-check every TSDoc `@example` on each prelude module's public API
 * against the live TypeScript source. The engine lives in `@onrails/docgen`
 * (`checkExamples`); this script supplies the prelude config (which modules,
 * source path mapping) and the reporting / exit-code shell.
 */
import { resolve } from 'node:path'
import { checkExamples } from '@onrails/docgen'
import { isErr } from '@onrails/result'

const REPO_ROOT = resolve(import.meta.dirname, '..')

const MODULES = ['Func', 'General', 'List', 'Num', 'Obj', 'Str'] as const

const PACKAGES = MODULES.map((mod) => ({
  entry: `src/${mod}/index.ts`,
  name: `preludejs/${mod}`,
}))

// Map specifiers to source (not built dist) so examples check against the live
// API and never go stale — the same mapping the docs twoslash pipeline uses.
const PATHS = Object.fromEntries(
  MODULES.flatMap((mod) => [
    [`preludejs/${mod}`, [`src/${mod}/index.ts`]],
    [`preludejs/${mod}/*`, [`src/${mod}/*`]],
  ]),
)

const result = checkExamples(PACKAGES, { baseUrl: REPO_ROOT, paths: PATHS })

if (isErr(result)) {
  console.error(result.error.message)
  process.exit(1)
}

const { total, packages, failures } = result.value
console.log(
  `Checked ${total} @example snippet${total === 1 ? '' : 's'} across ${packages} modules.`,
)

if (!failures.length) {
  console.log('All examples compile against the current API. ✓')
} else {
  console.error(`\n${failures.length} example(s) no longer match the API:\n`)
  for (const f of failures) {
    console.error(`✗ ${f.pkgName} › ${f.symbol} (example #${f.index + 1})`)
    for (const m of f.messages) console.error(`    ${m}`)
    console.error('    ┌ snippet')
    for (const line of f.body.split('\n')) console.error(`    │ ${line}`)
    console.error('    └')
  }
  process.exit(1)
}
