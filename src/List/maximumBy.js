import curry from '../Func/curry';

//+ maximunBy :: (a -> b) -> [a] -> b
export default curry((fn, xs) => xs.reduceRight((max, x) => fn(x) > fn(max) ? x : max));
