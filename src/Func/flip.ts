import type { AnyFn, Reverse } from '../types.js'
import curry from './curry.js'

/**
 * Returns a function with the first two arguments flipped.
 *
 * @example
 * ```ts
 * flip(Math.pow)(2, 3) //=> 9
 * ```
 */
const flip = curry((fn: AnyFn, x: unknown, y: unknown) => fn(y, x)) as unknown as <
  A extends readonly unknown[],
  R,
>(
  fn: (...args: A) => R,
) => (...args: Reverse<A>) => R

export default flip
