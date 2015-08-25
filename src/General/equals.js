import { curry } from '../Func';

//+ equals :: a -> a -> Boolean
export default curry((a, b) => a === b);
