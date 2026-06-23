import flatten from './flatten.js'
import unique from './unique.js'

/**
 * Returns the unique items across all supplied lists.
 *
 * @example
 * ```ts
 * union([1, 2, 3], [3, 4]) //=> [1, 2, 3, 4]
 * ```
 */
const union = <A>(xs: readonly A[], ...yss: readonly (readonly A[])[]): A[] =>
  unique(xs.concat(flatten(yss)))

export default union
