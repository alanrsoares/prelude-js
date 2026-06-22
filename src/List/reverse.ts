/**
 * Returns a new list with the items in reverse order.
 *
 * @example
 * ```ts
 * reverse([1, 2, 3]) //=> [3, 2, 1]
 * ```
 */
export default function reverse<A>(xs: readonly A[]): A[] {
  return xs.concat().reverse()
}
