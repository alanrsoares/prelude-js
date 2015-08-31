import curry from '../Func/curry';
import concat from './concat';
import map from './map';

//+ concatMap :: (a -> [b]) -> [a] -> [b]
export default curry((fn, xs) => concat(map(fn, xs)));
