import curry from '../Func/curry';

//+ countBy :: (a -> b) -> [a] -> { b: Number }
export default curry((fn, xs) =>
  xs.reduce((acc, x) => {
    let key = fn(x);
    acc[key] = acc[key] ? acc[key] + 1 : 1;
    return acc;
  }, {}));
