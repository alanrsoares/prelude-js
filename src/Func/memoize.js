//+ memoize :: (a -> b) -> a -> b
export default (fn) => {
  const memo = {};
  return (...args) => {
    const key = args.map((arg) => arg + typeof arg).join('');
    return (key in memo) ? memo[key] : (memo[key] = fn(...args));
  };
};
