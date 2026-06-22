import type { Predicate } from '../types.d.ts'
import curry from '../Func/curry.js'

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
}) as unknown as <A>(fn: Predicate<A>, xs: readonly A[]) => A[]

export default takeWhile
