import curry from '../Func/curry';

//+ foldl :: (b -> a -> b) -> b -> [a] -> b
export default curry((fn, acc, xs) => xs.reduce(fn, acc));
