//+ deny :: (a -> b) -> !(a -> b)
export default (fn) => (...args) => !fn(...args);
