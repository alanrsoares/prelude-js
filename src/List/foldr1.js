import curry from '../Func/curry';
import foldr from './foldr';
import last from './last';
import initial from './initial';

//+ foldr1 :: (a -> a -> a) -> [a] -> a
export default curry((fn, xs) => foldr(fn, last(xs), initial(xs)));
