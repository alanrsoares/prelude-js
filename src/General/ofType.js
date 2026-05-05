import curry from '../Func/curry.js'
import typeOf from './typeOf.js'
import equals from './equals.js'

/**
 * @remarks
 *
 * ```text
 * ofType :: (String, a) -> Boolean
 * ```
 *
 * @param arg1 - `(String, a)`
 *
 * @returns `Boolean`
 */
export default curry((type, x) => equals(type, typeOf(x)))
