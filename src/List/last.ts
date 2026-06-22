/**
 * Returns the last item of the list, or undefined.
 *
 * @example
 * ```ts
 * last([1, 2, 3]) //=> 3
 * ```
 */
export default function last<A>(xs: readonly A[]): A | undefined {
  return xs.slice(-1)[0]
}
