import curry from '../Func/curry';

//+ foldl1 :: (a -> a -> a) -> [a] -> a
export default curry((fn, xs) => xs.reduce(fn, 0));
