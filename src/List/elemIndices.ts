import curry from '../Func/curry.js'
import findIndices from './findIndices.js'

/**
 * Returns the indices of all items equal to the value; curried.
 *
 * @example
 * ```ts
 * elemIndices(2, [2, 1, 2]) //=> [0, 2]
 * ```
 */
const elemIndices = curry((value: unknown, xs: readonly unknown[]) =>
  findIndices((x) => x === value, xs),
) as unknown as <A>(value: A, xs: readonly A[]) => number[]

export default elemIndices
