import curry from '../Func/curry';
import merge from '../Obj/merge';
import values from '../Obj/values';

//+ uniqueBy :: (a -> b) -> [a] -> [a]
export default curry((fn, xs) => {
  const reducer = (acc, x) => merge(acc, { [`K_${x}`]: x });
  return values(xs.map(fn).reduce(reducer, {}));
});
