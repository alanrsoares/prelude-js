import curry from '../Func/curry';
import deny from '../Func/deny';

//+ reject :: (a -> Boolean) -> [a] -> [a]
export default curry((fn, xs) => xs.filter(deny(fn)));
