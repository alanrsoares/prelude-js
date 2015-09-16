import curry from '../Func/curry';

//+ foldr :: (b -> a -> b) -> b -> [a] -> b
export default curry((fn, acc, xs) => {
  for (let i = xs.length - 1; i >= 0; i--) {
    acc = fn(xs[i], acc);
  }
  return acc;
});
