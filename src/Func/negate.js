//+ negate :: (a -> b) -> !(a -> b)
export default (fn) => (...args) => !fn.apply(null, args);
