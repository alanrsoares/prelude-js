/**
 * Returns all items but the last, or undefined for an empty list.
 *
 * @example
 * ```ts
 * initial([1, 2, 3, 4]) //=> [1, 2, 3]
 * ```
 */
export default function initial<A>(xs: readonly A[]): A[] {
  return (!xs.length ? undefined : xs.slice(0, -1)) as A[]
}
