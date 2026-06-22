import type { Predicate } from '../types.d.ts'
import curry from '../Func/curry.js'
import dropWhile from './dropWhile.js'
import takeWhile from './takeWhile.js'

/**
 * Splits a list into the longest prefix that satisfies the predicate and the rest; curried.
 *
 * @example
 * ```ts
 * span((x: number) => x < 3, [1, 2, 3, 4]) //=> [[1, 2], [3, 4]]
 * ```
 */
const span = curry((f: Predicate<unknown>, xs: readonly unknown[]) => [
  takeWhile(f, xs),
  dropWhile(f, xs),
]) as unknown as <A>(fn: Predicate<A>, xs: readonly A[]) => [A[], A[]]

export default span
