import { curry } from '../Func';
import typeOf from './typeOf';

//+ isType :: (String, a) -> Boolean
export default curry((type, x) => typeOf(x) === type);
