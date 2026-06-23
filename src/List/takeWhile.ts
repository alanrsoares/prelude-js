import curry from '../Func/curry.js'
import type { CurriedListFilter, Predicate } from '../types.js'

/**
 * Takes leading items while the predicate holds; curried.
 *
 * @example
 * ```ts
 * takeWhile((n: number) => n <= 3, [2, 3, 5, 1]) //=> [2, 3]
 * ```
 */
const takeWhile = curry((f: Predicate<unknown>, xs: readonly unknown[]) => {
  for (const x in xs) {
    if (f(xs[x], Number(x), xs)) continue
    return xs.slice(0, Number(x))
  }
  return xs
}) as unknown as CurriedListFilter

export default takeWhile
