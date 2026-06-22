import curry from '../Func/curry.js'

/**
 * Checks strict equality between two values.
 *
 * @example
 * ```ts
 * equals(2, 2) //=> true
 * ```
 */
const equals = curry((a: unknown, b: unknown) => a === b) as unknown as (
  left: unknown,
  right: unknown,
) => boolean

export default equals
