import curry from '../Func/curry';
import fix from '../Func/fix';

//+ find :: (a -> Boolean) -> [a] -> a
export default fix((find) => curry((fn, [x, ...xs]) => x
  ? fn(x) ? x : find(fn, xs)
  : undefined
));
