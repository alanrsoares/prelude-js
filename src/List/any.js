import curry from '../Func/curry';

//+ any :: (a -> Boolean) -> [a] -> Boolean
export default curry((fn, xs) => xs.some(fn));
