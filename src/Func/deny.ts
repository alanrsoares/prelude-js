/**
 * Denies the result of a predicate function.
 *
 * @example
 * ```ts
 * deny((x: number) => x > 2)(2) //=> true
 * ```
 */
export default function deny<A extends readonly unknown[], R>(
  fn: (...args: A) => R,
): (...args: A) => boolean {
  return (...args: A) => !fn(...args)
}
