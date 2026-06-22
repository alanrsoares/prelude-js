import type { AnyFn, Curried } from '../types.js'
import curry from './curry.js'

/**
 * Applies an array of arguments to a function, which is especially handy for
 * curried functions.
 *
 * @example
 * ```ts
 * const add = curry((a: number, b: number) => a + b)
 * uncurry(add, [2, 3]) //=> 5
 * ```
 */
const uncurry = curry((fn: AnyFn, args: readonly unknown[]) => fn(...args)) as unknown as <
  A extends readonly unknown[],
  R,
>(
  fn: Curried<A, R>,
) => (...args: A) => R

export default uncurry
