import type { Predicate } from '../types.d.ts'
import curry from '../Func/curry.js'
import deny from '../Func/deny.js'
import span from './span.js'

/**
 * Splits the list at the first item that satisfies the predicate; curried.
 *
 * @example
 * ```ts
 * breakList((x: number) => x > 2, [1, 2, 3, 4]) //=> [[1, 2], [3, 4]]
 * ```
 */
const breakList = curry((fn: Predicate<unknown>, xs: readonly unknown[]) =>
  span(deny(fn), xs),
) as unknown as <A>(fn: Predicate<A>, xs: readonly A[]) => [A[], A[]]

export default breakList
