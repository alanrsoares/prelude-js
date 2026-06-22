#!/usr/bin/env bun
/**
 * Extracts the homepage tabbed-example snippets from real, type-checked example
 * modules in `examples/` into `app/(home)/snippets.generated.ts`. Because the
 * example modules are compiled by the docs `types:check` gate (resolving
 * `preludejs/*` against live source), the rendered homepage snippets can never
 * drift from the real API.
 */
import { extractSnippets } from '@onrails/twoslash'

const { count, outFile, skipped } = await extractSnippets({
  srcDir: 'examples',
  outFile: 'app/(home)/snippets.generated.ts',
  sourceLabel: 'apps/docs/examples',
  generatedBy: 'extract-snippets',
})

console.log(`Extracted ${count} snippet(s) -> ${outFile}`)
if (skipped.length) console.warn(`Skipped (no #region snippet): ${skipped.join(', ')}`)
