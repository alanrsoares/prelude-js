import curry from '../Func/curry';

// sortBy :: (a -> b) -> [a] -> [a]
export default curry((fn, xs) =>
  xs.concat()
    .sort((x, y) =>
      fn(x) > fn(y)
      ? 1
      : fn(x) < fn(y)
        ? -1
        : 0
    ));
