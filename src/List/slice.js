import curry from '../Func/curry';

//+ slice :: Number -> Number -> [a] -> [a]
export default curry((x, y, xs) => xs.slice(x, y));
