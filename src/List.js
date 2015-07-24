import { curry, compose } from './Func';

export const id = (x) => x;

export const negate = (x) => !x;

export const each = curry((fn, xs) => xs.forEach(fn));

export const map = curry((fn, xs) => xs.map(fn));

export const filter = curry((fn, xs) => xs.filter(fn));

export const compact = filter(id);

export const reject = curry((fn, xs) => xs.filter(compose(fn, negate)));

export const reduce = curry((fn, xs) => xs.reduce(fn));

export const partition = curry((fn, xs) => {
  let passed = [];
  let failed = [];
  xs.forEach((x) => (fn(x) ? passed : failed ).push(x));
  return [passed, failed];
});

export const find = curry((fn, [x, ...xs]) => x
  ? fn(x) ? x : find(fn, xs)
  : undefined
);

export default {
  each,
  map,
  filter,
  compact,
  reject,
  reduce,
  partition
};
