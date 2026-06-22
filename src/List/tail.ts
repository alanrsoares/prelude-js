/**
 * Returns all items but the first.
 *
 * @example
 * ```ts
 * tail([1, 2, 3]) //=> [2, 3]
 * ```
 */
export default function tail<A>(xs: readonly A[]): A[] {
  const [, ...rest] = xs
  return rest
}
