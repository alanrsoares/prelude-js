#!/usr/bin/env bun
/**
 * prelude-js config for the `@onrails/docgen` API-reference generator.
 *
 * The engine (TS AST -> MDX) is project-agnostic; it reads each module's
 * TypeScript source + TSDoc (`@example` blocks are the single source of truth
 * for the rendered examples). This runner only supplies the prelude specifics:
 * which modules to document and where each page is written. It also refreshes
 * the fumadocs `meta.json` page ordering.
 */
import { writeFileSync } from 'node:fs'
import { generateApiDocs } from '@onrails/docgen'
import { isErr } from '@onrails/result'

const MODULES = ['Func', 'General', 'List', 'Num', 'Obj', 'Str'] as const

const result = generateApiDocs(
  MODULES.map((mod) => ({
    entry: `src/${mod}/index.ts`,
    name: `preludejs/${mod}`,
    out: `apps/docs/content/docs/api/${mod.toLowerCase()}.mdx`,
  })),
)

if (isErr(result)) {
  console.error(result.error.message)
  process.exit(1)
}

for (const out of result.value) console.log(`Generated ${out}`)

// Refresh fumadocs page ordering.
const meta = {
  title: 'prelude-js',
  pages: [
    'index',
    'getting-started',
    '---api---',
    ...MODULES.map((mod) => `api/${mod.toLowerCase()}`),
  ],
}

writeFileSync('./apps/docs/content/docs/meta.json', `${JSON.stringify(meta, null, 2)}\n`, 'utf-8')
console.log('Generated ./apps/docs/content/docs/meta.json')
