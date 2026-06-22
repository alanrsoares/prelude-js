/**
 * Returns the first item of the list, or undefined.
 *
 * @example
 * ```ts
 * head([1, 2, 3]) //=> 1
 * ```
 */
export default function head<A>(xs: readonly A[]): A | undefined {
  return xs[0]
}
