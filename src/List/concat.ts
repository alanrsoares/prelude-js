/**
 * Concatenates a list of lists into a single list.
 *
 * @example
 * ```ts
 * concat([[1, 2], [3], [4, 5]]) //=> [1, 2, 3, 4, 5]
 * ```
 */
export default function concat<A>(xss: readonly (readonly A[])[]): A[] {
  return ([] as A[]).concat(...(xss as A[][]))
}
