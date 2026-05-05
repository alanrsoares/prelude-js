import curry from './curry.js'

/**
 * flip :: (a -> b -> c) -> b -> a -> c
 *
 * @remarks
 * @param arg1 - `(a -> b -> c)`
 * @param arg2 - `b`
 * @param arg3 - `a`
 * @returns `c`
 */
export default curry((fn, x, y) => fn(y, x))
