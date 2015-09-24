import curry from '../Func/curry';
import typeOf from './typeOf';
import equals from './equals';

//+ ofType :: (String, a) -> Boolean
export default curry((type, x) => equals(type, typeOf(x)));
