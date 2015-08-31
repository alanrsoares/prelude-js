import curry from '../Func/curry';
import foldr from './foldr';

//+ foldr1 :: (a -> a -> a) -> [a] -> a
export default curry((fn, xs) => foldr(fn, 0, xs));
