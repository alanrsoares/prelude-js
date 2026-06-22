/**
 * Returns the product of a list of numbers.
 *
 * @example
 * ```ts
 * product([1, 2, 3]) //=> 6
 * ```
 */
export default function product(xs: readonly number[]): number {
  return xs.reduceRight((x, y) => x * y)
}
