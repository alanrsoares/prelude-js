import curry from './curry.js'

/**
 * uncurry :: (a -> b -> c) -> [a, b] -> c
 *
 * @remarks
 * @param arg1 - `(a -> b -> c)`
 * @param arg2 - `[a, b]`
 * @returns `c`
 */
export default curry((fn, args) => fn(...args))
