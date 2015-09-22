import curry from '../Func/curry';
import last from '../List/last';

//+ scan :: (a -> b) -> [a] -> [b]
export default curry((fn, init, xs) => xs.reduce((acc, x) => acc.concat(fn(last(acc), x)), [init]));
