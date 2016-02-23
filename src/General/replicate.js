import curry from '../Func/curry';
import range from '../List/range';

//+ replicate :: (Number, b) -> [b]
export const replicate = curry((n, x) => range(n).map(() => x));

export default replicate;
