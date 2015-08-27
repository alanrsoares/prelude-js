import curry from '../Func/curry';
import merge from '../Obj/merge';

//+ uniqueBy :: (a -> b) -> [a] -> [a]
export default curry((fn, xs) => {
  const reducer = (acc, x) => merge(acc, { [`K_${x}`]: x });
  return Object.values(xs.map(fn).reduce(reducer, {}));
});
