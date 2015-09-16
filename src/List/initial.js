//+ initial :: [a] -> [a]
export default (xs) => !xs.length ? undefined : xs.slice(0, -1);
