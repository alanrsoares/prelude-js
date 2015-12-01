import curry from '../Func/curry';
import take from '../List/take';

//+ take :: Number -> String -> String
export default curry((n, x) => x && take(n, x.split('')).join(''));
