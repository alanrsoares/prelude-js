'use client'

import { Children, type ReactNode, useId, useState } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Browser/editor-style code frame: the traffic-light dots and the file tabs
 * share a single chrome bar, and the inner code block is flattened into it. Each
 * child is a pre-rendered snippet panel (server components are fine — they're
 * toggled with `hidden`, never refetched), so twoslash hover lenses keep working
 * under static export.
 */
export function CodeTabs({
  tabs,
  children,
}: {
  tabs: ReadonlyArray<{ label: string; filename: string }>
  children: ReactNode
}) {
  const [active, setActive] = useState(0)
  const panels = Children.toArray(children)
  const baseId = useId()

  return (
    <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-sm">
      <div className="flex items-center gap-3 border-b border-fd-border bg-fd-muted/30 pl-4">
        <div className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-red-400/70" />
          <span className="size-3 rounded-full bg-yellow-400/70" />
          <span className="size-3 rounded-full bg-green-400/70" />
        </div>
        <div role="tablist" className="-mb-px flex items-stretch overflow-x-auto">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${baseId}-panel-${i}`}
              onClick={() => setActive(i)}
              className={twMerge(
                'whitespace-nowrap border-b-2 px-3 py-3 font-mono text-xs transition-colors',
                i === active
                  ? 'border-fd-primary text-fd-foreground'
                  : 'border-transparent text-fd-muted-foreground hover:text-fd-foreground',
              )}
            >
              {t.filename}
            </button>
          ))}
        </div>
      </div>
      {panels.map((panel, i) => (
        <div
          key={tabs[i]?.label ?? i}
          role="tabpanel"
          id={`${baseId}-panel-${i}`}
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={i !== active}
          // flatten the nested code block so it sits cleanly inside the frame
          className="[&_.shiki]:!my-0 [&_.shiki]:!rounded-none [&_.shiki]:!border-0 [&_.shiki]:!bg-transparent [&_.shiki]:!shadow-none"
        >
          {panel}
        </div>
      ))}
    </div>
  )
}
