/**
 * Denies the result of a predicate function.
 *
 * @example
 * ```ts
 * const gt2 = (x: number) => x > 2
 * const twoOrLess = deny(gt2)
 * twoOrLess(2) //=> true
 * ```
 */
export default function deny<A extends readonly unknown[], R>(
  fn: (...args: A) => R,
): (...args: A) => boolean {
  return (...args: A) => !fn(...args)
}
