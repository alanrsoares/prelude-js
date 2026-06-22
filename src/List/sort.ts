/**
 * Returns a new list sorted with default comparison.
 *
 * @example
 * ```ts
 * sort([1, 3, 2]) //=> [1, 2, 3]
 * ```
 */
export default function sort<A>(xs: readonly A[]): A[] {
  return xs.concat().sort()
}
