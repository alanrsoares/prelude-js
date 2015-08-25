import { curry, compose } from '../Func';
import typeOf from './typeOf';
import equals from './equals';

//+ isType :: (String, a) -> Boolean
export default curry((type, x) => compose(equals(type), typeOf)(x));
