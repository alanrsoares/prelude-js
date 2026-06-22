/**
 * Returns true when the list has no items.
 *
 * @example
 * ```ts
 * empty([]) //=> true
 * ```
 */
export default function empty<A>(xs: readonly A[]): boolean {
  return !xs.length
}
