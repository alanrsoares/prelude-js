import type { AnyFn } from '../types.js'

/**
 * Fix-point function for anonymous recursion, implemented with the
 * {@link https://en.wikipedia.org/wiki/Fixed-point_combinator#Y_combinator | Y combinator}.
 *
 * @example
 * ```ts
 * fix<[number], number>((recur) => (n) => (n <= 1 ? 1 : recur(n - 1) + recur(n - 2)))(9) //=> 55
 * ```
 */
export default function fix<A extends readonly unknown[], R>(
  fn: (recur: (...args: A) => R) => (...args: A) => R,
): (...args: A) => R {
  const y =
    (g: AnyFn) =>
    (...args: A) =>
      fn(g(g))(...args)
  return y(y)
}
