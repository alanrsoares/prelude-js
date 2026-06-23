import find from './find.js'

/**
 * Returns items present in the first list but absent from the rest.
 *
 * @example
 * ```ts
 * difference([1, 2, 3, 4], [1], [4]) //=> [2, 3]
 * ```
 */
const difference = <A>(xs: readonly A[], ...yss: readonly (readonly A[])[]): A[] =>
  xs.filter((x) => !yss.some((ys) => find((y: A) => y === x, ys)))

export default difference
