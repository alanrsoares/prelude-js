import { highlight } from 'fumadocs-core/highlight'
import { transformerTwoslash } from 'fumadocs-twoslash'
import { Popup, PopupContent, PopupTrigger } from 'fumadocs-twoslash/ui'
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock'
import { twMerge } from 'tailwind-merge'
import { twoslashCompilerOptions } from '@/lib/twoslash'

/**
 * Server-renders a twoslash snippet (compiled against the real prelude-js source)
 * with shiki highlighting and hover lenses — for use outside MDX, e.g. the
 * landing page, where the rehypeCode pipeline doesn't run.
 */
export async function TwoslashSnippet({
  code,
  lang = 'ts',
}: {
  code: string
  lang?: 'ts' | 'tsx' | 'js'
}) {
  return highlight(code, {
    lang,
    themes: { light: 'github-light', dark: 'github-dark' },
    // emit both themes as CSS variables so it follows the .dark class instead of
    // baking only the first (light) theme.
    defaultColor: false,
    transformers: [
      transformerTwoslash({
        explicitTrigger: false,
        twoslashOptions: { compilerOptions: twoslashCompilerOptions },
      }),
    ],
    components: {
      pre: (props) => (
        <CodeBlock
          {...props}
          // merge — keep shiki's `twoslash lsp shiki-themes …` classes (the
          // hover-underline cascade hangs off `.twoslash`) and flatten chrome.
          className={twMerge(
            props.className,
            'border-none bg-transparent rounded-none my-0 shadow-none [&_pre]:bg-transparent',
          )}
        >
          <Pre>{props.children}</Pre>
        </CodeBlock>
      ),
      Popup,
      PopupContent,
      PopupTrigger,
    },
  })
}
