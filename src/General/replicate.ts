import curry from '../Func/curry.js'
import range from '../List/range.js'

/**
 * Builds a list of repeated copies of the supplied value.
 *
 * @example
 * ```ts
 * replicate(3, 'a') //=> ['a', 'a', 'a']
 * ```
 */
export const replicate = curry((n: number, x: unknown) => range(n).map(() => x)) as unknown as <T>(
  n: number,
  value: T,
) => T[]

export default replicate
