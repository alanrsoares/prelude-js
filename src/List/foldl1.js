import curry from '../Func/curry';
import fold from './fold';
import head from './head';
import tail from './tail';

//+ foldl1 :: (a -> a -> a) -> [a] -> a
export default curry((fn, xs) => fold(fn, head(xs), tail(xs)));
