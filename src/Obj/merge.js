import reduce from './reduce';

//+ merge :: {a: b} -> {a: b} -> {a: b}
export default Object.assign || ((y, ...xs) =>
  xs.reduce((z, x) =>
    reduce((acc, key, value) => {
      acc[key] = value;
      return acc;
    }, z, x), y));
