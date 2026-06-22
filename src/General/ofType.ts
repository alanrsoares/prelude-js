import curry from '../Func/curry.js'
import equals from './equals.js'
import typeOf from './typeOf.js'

/**
 * Checks whether a value matches the supplied runtime type name.
 *
 * @example
 * ```ts
 * ofType('Array', []) //=> true
 * ```
 */
const ofType = curry((type: string, x: unknown) => equals(type, typeOf(x))) as unknown as (
  type: string,
  value: unknown,
) => boolean

export default ofType
