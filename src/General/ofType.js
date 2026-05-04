import curry from '../Func/curry.js'
import typeOf from './typeOf.js'
import equals from './equals.js'

// + ofType :: (String, a) -> Boolean
export default curry((type, x) => equals(type, typeOf(x)))
