import curry from '../Func/curry';

//+ minimumBy :: (a -> b) -> [a] -> b
export default curry((fn, xs) => xs.reduceRight((min, x) => fn(x) < fn(min) ? x : min));
