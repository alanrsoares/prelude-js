import curry from '../Func/curry';
import takeWhile from '../List/takeWhile';

//+ take :: Number -> String -> String
export default curry((f, x) => x && takeWhile(f, x.split('')).join(''));
