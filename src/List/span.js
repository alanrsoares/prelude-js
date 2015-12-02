import curry from '../Func/curry';
import takeWhile from './takeWhile';
import dropWhile from './dropWhile';

//+ span :: (a -> Bool) -> [a] -> [[a], [a]]
export default curry((f, xs) => [takeWhile(f, xs), dropWhile(f, xs)]);
