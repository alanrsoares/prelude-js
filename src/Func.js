//:: ((a, b) => c) => (a) => (b) => c
export const curry = (fn, ...args) => {
  const c = (fnArgs) => {
    if (fnArgs.length >= fn.length) {
      return fn.apply(this, fnArgs);
    }
    return (...cArgs) => c([...fnArgs, ...cArgs]);
  };
  return c(args);
};

//:: ((...args) => b?, args:[ Any ]) => b
export const apply = curry((fn, args) => fn.apply(null, args));

//:: (a => b => c) => b => a => c
export const flip = curry((fn, x, y) => fn(y, x));

export const over = curry((f, g, x, y) => f((g(x)), (g(y))));

//:: ((a) => b) => (a) => b
export const memoize = (fn) => {
  let memo = {};
  return (...args) => {
    const key = args.map((arg) => arg + typeof arg).join('');
    return memo[key] || (memo[key] = fn.apply(null, args));
  };
};

//:: (...Function) => Function
export const compose = (...fns) =>
  (...args) =>
    fns.reduce((memo, fn, i) => [fn.apply(this, memo)], args)[0];

// aliases

export const memoise = memoize;

export default {
  curry,
  apply,
  flip,
  over,
  memoize,
  memoise,
  compose
};
