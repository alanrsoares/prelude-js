//:: ((a, b) -> c) -> a -> b -> c
export const curry = (fn, ...args) => {
  const c = (fnArgs) => {
    if (fnArgs.length >= fn.length) {
      return fn.apply(this, fnArgs);
    }
    return (...cArgs) => c([...fnArgs, ...cArgs]);
  };
  return c(args);
};

//:: ([a] -> b?, [a]) -> b?
export const apply = curry((fn, args) => fn.apply(null, args));

//:: (a -> b -> c) -> b -> a -> c
export const flip = curry((fn, x, y) => fn(y, x));

//
export const fix = (f) =>
  ((g) => (...args) => f(g(g)).apply(null, args))
  ((g) => (...args) => f(g(g)).apply(null, args));

//:: (a -> b) -> a -> b
export const memoize = (fn) => {
  let memo = {};
  return (...args) => {
    const key = args.map((arg) => arg + typeof arg).join('');
    return memo[key] || (memo[key] = fn.apply(null, args));
  };
};

// (a -> b) -> !(a -> b)
export const negate = (fn) => (...args) => !fn.apply(null, args);

//:: ([a -> b?]) -> a -> b?
export const compose = (...fns) =>
  (...args) =>
    fns.reduceRight((memo, fn) => [fn.apply(this, memo)], args)[0];

// aliases

export const memoise = memoize;

export default {
  curry,
  apply,
  flip,
  memoize,
  memoise,
  negate,
  compose
};
