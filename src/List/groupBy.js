import curry from '../Func/curry';

//+ groupBy :: (a -> b) -> [a] -> { b: [b] }
export default curry((fn, xs) =>
  xs.reduce((acc, x) => {
    let key = fn(x);
    acc[key] = acc[key] ? acc[key].concat([x]) : [x];
    return acc;
  }, {}));
