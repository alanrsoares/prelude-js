import curry from '../Func/curry.js'
import fix from '../Func/fix.js'
import type { Predicate } from '../types.js'

/**
 * Returns the first item that satisfies the predicate, or undefined; curried.
 *
 * @example
 * ```ts
 * find((x: number) => x > 2, [1, 2, 3, 4]) //=> 3
 * ```
 */
const find = fix((recur: (fn: (x: unknown) => unknown, xs: readonly unknown[]) => unknown) =>
  curry((fn: (x: unknown) => unknown, [x, ...xs]: readonly unknown[]) =>
    x ? (fn(x) ? x : recur(fn, xs)) : undefined,
  ),
) as unknown as {
  <A>(fn: Predicate<A>): (xs: readonly A[]) => A | undefined
  <A>(fn: Predicate<A>, xs: readonly A[]): A | undefined
}

export default find
