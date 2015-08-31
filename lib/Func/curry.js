//:: ((a, b) -> c) -> a -> b -> c
export default function(fn, ...args) {
  const c = (fnArgs) => {
    if (fnArgs.length >= fn.length) {
      return fn.apply(this, fnArgs);
    }
    return (...cArgs) => c([...fnArgs, ...cArgs]);
  };
  return c(args);
}
