import curry from '../Func/curry';

//:: (a -> [b]) -> [a] -> [b]
export default curry((fn, b) => {
  let result = [];
  let x = b;
  let that;
  while ((that = fn(b))) {
    result.push(that[0]);
    x = that[1];
  }
  return result;
});
