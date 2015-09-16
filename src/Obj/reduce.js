import curry from '../Func/curry';
import keys from './keys';

//+ reduce :: (a -> b) -> a -> b -> a
export default curry((fn, initial, x) =>
  keys(x).reduce((acc, k, i) => fn(acc, k, x[k], i, x), initial));
