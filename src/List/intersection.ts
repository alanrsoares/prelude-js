import find from './find.js'

/**
 * Returns items present in the first list and every other list.
 *
 * @example
 * ```ts
 * intersection([1, 2, 3], [2, 3, 4]) //=> [2, 3]
 * ```
 */
const intersection = <A>(xs: readonly A[], ...yss: readonly (readonly A[])[]): A[] =>
  xs.filter((x) => yss.some((ys) => find((y: A) => y === x, ys)))

export default intersection
