/**
 * deny :: (a -> b) -> !(a -> b)
 *
 * @remarks
 * @param arg1 - `(a -> b)`
 * @returns `!(a -> b)`
 */
export default (fn) =>
  (...args) =>
    !fn(...args)
