//+ compose :: ([a -> b?]) -> a -> b?
export default (...fns) =>
  (...args) =>
    fns.reduceRight((memo, fn) => [fn.apply(this, memo)], args)[0];
