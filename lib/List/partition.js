import curry from '../Func/curry';

//+ partition :: (a -> Boolean) -> [a] -> [[a] [a]]
export default curry((fn, xs) => {
  let passed = [];
  let failed = [];
  xs.forEach((x) => (fn(x) ? passed : failed ).push(x));
  return [passed, failed];
});
