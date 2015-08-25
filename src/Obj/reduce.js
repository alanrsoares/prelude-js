import curry from '../Func/curry';
import keys from './keys';

//+ reduce :: (a -> b) -> a -> b -> a
export default curry((fn, initial, x) =>
  keys(x).reduce((memo, k, i) => fn(memo, k, x[k], i), initial));
