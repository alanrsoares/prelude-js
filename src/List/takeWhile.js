import curry from '../Func/curry';

//+ takeWhile :: (a -> Bool) -> [a] -> [a]
export default curry((f, xs) => {
  for (let x in xs) {
    if (f(xs[x])) continue;
    else return xs.slice(0, x);
  }
  return xs;
});
