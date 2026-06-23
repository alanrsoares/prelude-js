import curry from '../Func/curry.js'
import type { CurriedListFilter, Predicate } from '../types.js'

/**
 * Drops leading items while the predicate holds; curried.
 *
 * @example
 * ```ts
 * dropWhile((n: number) => n <= 3, [2, 3, 5, 1]) //=> [5, 1]
 * ```
 */
const dropWhile = curry((f: Predicate<unknown>, xs: readonly unknown[]) => {
  for (const x in xs) {
    if (f(xs[x], Number(x), xs)) continue
    return xs.slice(Number(x))
  }
  return []
}) as unknown as CurriedListFilter

export default dropWhile
