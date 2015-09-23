import curry from '../Func/curry';
import scan from '../List/scan';
import reverse from '../List/reverse';

//+ scan :: (a -> b) -> [a] -> [b]
export default curry((fn, init, xs) => reverse(scan(fn, init, reverse(xs))));
