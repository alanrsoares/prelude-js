import type { AnyFn } from '../types.d.ts'
import curry from './curry.js'

/**
 * Returns the application of the supplied list as arguments to the supplied function.
 *
 * @example
 * ```ts
 * const sum = (a: number, b: number) => a + b
 * apply(sum, [2, 3]) //=> 5
 * ```
 */
const apply = curry((fn: AnyFn, args: readonly unknown[]) => fn(...args)) as unknown as <
  A extends readonly unknown[],
  R,
>(
  fn: (...args: A) => R,
  args: A,
) => R

export default apply
