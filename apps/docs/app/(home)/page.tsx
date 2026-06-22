import { ArrowRight, Layers, ShieldCheck, Workflow, Zap } from 'lucide-react'
import Link from 'next/link'
import { CodeTabs } from '@/components/code-tabs'
import { TwoslashSnippet } from '@/components/twoslash-snippet'
import { snippets } from '@/lib/snippets.generated'
import { gitConfig } from '@/lib/shared'

const features = [
  {
    icon: Zap,
    title: 'Curried by Default',
    body: 'Multi-argument functions are curried out of the box to make function composition and point-free style effortless.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Typed',
    body: 'Shipped with clean TypeScript (.d.ts) declaration files. Get full type safety and IDE autocomplete in JS/TS.',
  },
  {
    icon: Workflow,
    title: 'Functional Composition',
    body: 'Compose operations cleanly with right-to-left compose, Y-combinator fix, memoization, flip, and more.',
  },
  {
    icon: Layers,
    title: 'Tree-Shaking Friendly',
    body: 'Zero external dependencies. Every utility lives in its own file, allowing bundlers to drop unused helpers.',
  },
]

// Each tab's code is the live source of a type-checked example module in
// examples/*.ts (see lib/snippets.generated.ts), rendered through twoslash so
// tokens carry hover types.
const examples = [
  { id: 'func', filename: 'func.ts' },
  { id: 'list', filename: 'list.ts' },
  { id: 'obj', filename: 'obj.ts' },
  { id: 'str', filename: 'str.ts' },
  { id: 'combined', filename: 'combined.ts' },
] as const

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center px-4">
      {/* hero */}
      <section className="flex w-full max-w-5xl flex-col items-center pt-20 pb-16 text-center sm:pt-28">
        <span className="mb-5 rounded-full border border-fd-border bg-fd-secondary/60 px-3 py-1 text-xs font-medium tracking-wide text-fd-muted-foreground animate-fade-in">
          modular · curried · functional-prelude
        </span>
        <h1 className="bg-gradient-to-b from-fd-foreground to-fd-foreground/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
          prelude-js
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-lg text-fd-muted-foreground sm:text-xl">
          A modular, tree-shaking friendly implementation of Haskell's Prelude library in modern
          JavaScript.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-semibold text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            Get started <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/docs/api/func"
            className="rounded-lg border border-fd-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-fd-accent"
          >
            API Reference
          </Link>
          <a
            href={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
            className="rounded-lg border border-fd-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-fd-accent"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* tabbed code sample in browser frame */}
      <section className="w-full max-w-3xl pb-20 text-left">
        <CodeTabs tabs={examples.map(({ id, filename }) => ({ label: id, filename }))}>
          {examples.map(({ id }) => (
            <TwoslashSnippet key={id} code={snippets[id].twoslash} />
          ))}
        </CodeTabs>
      </section>

      {/* features */}
      <section className="grid w-full max-w-5xl gap-4 pb-24 sm:grid-cols-2">
        {features.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:border-fd-primary/40"
          >
            <div className="mb-3 inline-flex rounded-lg bg-fd-primary/10 p-2 text-fd-primary">
              <Icon className="size-5" />
            </div>
            <h2 className="mb-1.5 font-semibold">{title}</h2>
            <p className="text-sm text-fd-muted-foreground">{body}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
