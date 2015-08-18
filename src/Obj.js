import { curry } from './Func';

//:: a -> a
export const clone = (x) => JSON.parse(JSON.stringify(x));

export const reduce = curry((fn, initial, x) =>
  Object.keys(x)
        .reduce((memo, k, i) => fn(memo, k, x[k], i), initial));

//:: (b → c) → {a: b} → {a: c}
export const map = curry((fn, x) =>
  x.keys().map((k, i) => fn(k, x[k], i)));

//:: {a: b} -> {a: b} -> {a: b}
export const merge = (y, ...xs) =>
  xs.reduce((z, x) =>
    reduce((memo, key, value) => {
      memo[key] = value;
      return memo;
    }, z, x), y);
