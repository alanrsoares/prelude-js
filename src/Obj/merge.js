import reduce from './reduce';

//+ merge :: {a: b} -> {a: b} -> {a: b}
export default Object.assign || ((y, ...xs) =>
  xs.reduce((z, x) =>
    reduce((memo, key, value) => {
      memo[key] = value;
      return memo;
    }, z, x), y));
