import curry from '../Func/curry.js'
import equals from './equals.js'
import typeOf from './typeOf.js'

/**
 * ofType :: (String, a) -> Boolean
 *
 * @remarks
 * @param arg1 - `(String, a)`
 * @returns `Boolean`
 */
export default curry((type, x) => equals(type, typeOf(x)))
