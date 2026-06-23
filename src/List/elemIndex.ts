import curry from '../Func/curry.js'
import findIndex from './findIndex.js'

/**
 * Returns the index of the first item equal to the value, or -1; curried.
 *
 * @example
 * ```ts
 * elemIndex(3, [1, 2, 3]) //=> 2
 * ```
 */
const elemIndex = curry((value: unknown, xs: readonly unknown[]) =>
  findIndex((x) => x === value, xs),
) as unknown as {
  <A>(value: A): (xs: readonly A[]) => number
  <A>(value: A, xs: readonly A[]): number
}

export default elemIndex
