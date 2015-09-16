import curry from '../Func/curry';
import keys from './keys';

//+ map :: ((a, b) -> c) -> {a: b} -> [c]
export default curry((fn, x) =>
  keys(x).map((k, i) => fn(k, x[k], i)));
