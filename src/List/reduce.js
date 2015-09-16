import curry from '../Func/curry';

//+ reduce :: ((a, b) -> a) -> [b] -> a
export default curry((fn, initial, xs) => xs.reduce(fn, initial));
