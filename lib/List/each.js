import curry from '../Func/curry';

//+ each :: (a -> b) -> [a] -> void
export default curry((fn, xs) => xs.forEach(fn));
