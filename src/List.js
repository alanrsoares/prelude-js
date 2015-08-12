import { curry, compose } from './Func';

export const id = (x) => x;

export const isArray = (x) => ({}).toString.call(x) === '[object Array]';

export const negate = (x) => !x;

//:: (a -> b) -> [a] -> void
export const each = curry((fn, xs) => xs.forEach(fn));

//:: (a -> b) -> [a] -> [b]
export const map = curry((fn, xs) => xs.map(fn));

//:: (a -> Bool) -> [a] -> [a]
export const filter = curry((fn, xs) => xs.filter(fn));

//:: [a] -> [a]
export const compact = filter(id);

//:: (a -> Bool) -> [a] -> [a]
export const reject = curry((fn, xs) => xs.filter(compose(fn, negate)));

//:: ((a, b) -> a) -> [b] -> a
export const reduce = curry((fn, xs) => xs.reduce(fn));

//:: (a -> Bool) -> [a] -> [[a] [a]]
export const partition = curry((fn, xs) => {
  let passed = [];
  let failed = [];
  xs.forEach((x) => (fn(x) ? passed : failed ).push(x));
  return [passed, failed];
});

//:: (a -> Bool) -> [a] -> a
export const find = curry((fn, [x, ...xs]) => x
  ? fn(x) ? x : find(fn, xs)
  : undefined
);

//:: [a] -> a
export const head = (xs) => xs[0];

//:: [a] -> [a]
export const tail = ([x, ...xs]) => xs;

//:: [a] -> a
export const first = head;

//:: [a] -> a
export const last = (xs) => xs.slice(-1)[0];

//:: [a] -> [a]
export const initial = (xs) => !xs.length ? undefined : xs.slice(0, -1);

//:: [a] -> Bool
export const empty = (xs) => !xs.length;

//:: [a] -> [a]
export const reverse = (xs) => xs.concat().reverse();

//:: (a -> b) -> [a] -> [a]
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

//:: [a] -> [a]
export const unique = (xs) => uniqueBy(id, xs);

//:: (b -> a -> b) -> b -> [a] -> b
export const foldl = curry((fn, memo, xs) => xs.reduce(fn, memo));

//:: (a -> a -> a) -> [a] -> a
export const foldl1 = curry((fn, xs) => xs.reduce(fn, 0));

//:: (b -> a -> b) -> b -> [a] -> b
export const foldr = curry((fn, memo, xs) => {
  for (let i = xs.length - 1; i >= 0; i--) {
    memo = fn(xs[i], memo);
  }
  return memo;
});

//:: (a -> a -> a) -> [a] -> a
export const foldr1 = curry((fn, xs) => foldr(fn, 0, xs));

//:: (a -> [b]) -> [a] -> [b]
export const unfoldr = curry((fn, b) => {
  let result = [];
  let x = b;
  let that;
  while ((that = fn(b))) {
    result.push(that[0]);
    x = that[1];
  }
  return result;
});

//:: [[a]] -> [a]
export const concat = (xss) => [].concat.apply([], xss);

//:: (a -> [b]) -> [a] -> [b]
export const concatMap = curry((fn, xs) => [].concat.apply([], xs.map(fn)));

//:: List -> List
export const flatten = (xs) =>
  [].concat.apply([], xs.map((x) => isArray(x) ? flatten(x) : x));

//:: ([a], [a], ...) -> [a]
export const difference = (xs, ...yss) =>
  xs.filter((x) => !yss.some(find((y) => y === x)));

//:: ([a], [a], ...) -> [a]
export const intersection = (xs, ...yss) =>
  xs.filter((x) => yss.some(find((y) => y === x)));

//:: ([a], [a], ...) -> [a]
export const union = (xs, ...yss) => unique(xs.concat(flatten(yss)));

//:: (a -> b) -> [a] -> { b: Number }
export const countBy = (fn, xs) =>
  xs.reduce((memo, x) => {
    let key = fn(x);
    memo[key] ? memo[key] ++ : memo[key] = 1;
    return memo;
  }, {});

  //:: (a -> b) -> [a] -> { b: [b] }
  export const groupBy = (fn, xs) =>
    xs.reduce((memo, x) => {
      let key = fn(x);
      memo[key] ? memo[key].push(x) : memo[key] = [x];
      return memo;
    }, {});


// aliases

export const fold = foldl;

export const fold1 = foldl1;

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
  uniqueBy,
  unique,
  fold,
  fold1,
  foldl,
  foldl1,
  foldr,
  foldr1,
  unfoldr,
  concat,
  concatMap,
  flatten,
  difference,
  intersection,
  union,
  countBy,
  groupBy
};
