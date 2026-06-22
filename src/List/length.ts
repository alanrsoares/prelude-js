/**
 * Returns the number of items in the list.
 *
 * @example
 * ```ts
 * length([1, 2, 3]) //=> 3
 * ```
 */
export default function length<A>(xs: readonly A[]): number {
  return xs.length
}
