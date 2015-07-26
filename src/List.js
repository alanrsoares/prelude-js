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

export const head = (xs) => xs[0];

export const tail = ([x, ...xs]) => xs;

export const first = head;

export const last = (xs) => xs.slice(-1);

export const initial = (xs) => !xs.length ? undefined : xs.slice(0, -1);

export const empty = (xs) => !xs.length;

export const reverse = (xs) => xs.concat().reverse();

export const uniqueBy = curry((f, xs) => {
  let memo = {};
  xs.map(f).forEach((x) => {
    const key = `K_${x}`;
    if (!memo[key]) {
      memo[key] = x;
    }
  });
  return Object.values(memo);
});

export const unique = (xs) => uniqueBy(id, xs);

export default {
  each,
  map,
  filter,
  compact,
  reject,
  reduce,
  partition,
  find,
  head,
  tail,
  first,
  last,
  initial,
  empty,
  reverse,
  unique
};
