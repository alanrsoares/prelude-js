import reduce from './reduce';

const reducer = reduce((acc, key, value) => {
  acc[key] = value;
  return acc;
});

//+ merge :: {a: b} -> {a: b} -> {a: b}
export default Object.assign || ((y, ...xs) => xs.reduce(reducer, y));
