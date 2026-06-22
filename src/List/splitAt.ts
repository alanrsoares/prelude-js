import curry from '../Func/curry.js'
import drop from './drop.js'
import take from './take.js'

/**
 * Splits a list into a prefix of length `index` and the remaining items; curried.
 *
 * @example
 * ```ts
 * splitAt(2, [1, 2, 3, 4]) //=> [[1, 2], [3, 4]]
 * ```
 */
const splitAt = curry((index: number, xs: readonly unknown[]) => [
  take(index, xs),
  drop(index, xs),
]) as unknown as <A>(count: number, xs: readonly A[]) => [A[], A[]]

export default splitAt
