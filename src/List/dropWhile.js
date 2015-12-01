import curry from '../Func/curry';

//+ dropWhile :: (a -> Bool) -> [x] -> [x]
export default curry((f, xs) => {
  for (let x in xs) {
    if (f(xs[x])) continue;
    else return xs.slice(x);
  }
  return [];
});
