import { curry } from './Func';

//:: {a: b} → [a]
export const keys = Object.keys;

//:: {a: b} → [b]
export const values = Object.values || ((x) => keys(x).map((k) => x[k]));

//:: (b → c) → {a: b} → {a: c}
export const map = curry((fn, x) =>
  keys(x).map((k, i) => fn(k, x[k], i)));

//:: (a → b) → a → b → a
export const reduce = curry((fn, initial, x) =>
  keys(x).reduce((memo, k, i) => fn(memo, k, x[k], i), initial));

//:: [[a, b]] → {a: b}
export const pairsToObj = (xs) =>
  xs.reduce((memo, x) => {
    memo[x[0]] = x[1];
    return memo;
  }, {});

//:: {a: b} → [[a, b]]
export const objToPairs = map((k, v) => [k, v]);

//:: a → a'
export const clone = (x) => JSON.parse(JSON.stringify(x));

//:: {a: b} -> {a: b} -> {a: b}
export const merge = Object.assign || ((y, ...xs) =>
  xs.reduce((z, x) =>
    reduce((memo, key, value) => {
      memo[key] = value;
      return memo;
    }, z, x), y));
