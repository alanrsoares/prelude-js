import curry from './curry.js'

/**
 * @remarks
 *
 * ```text
 * flip :: (a -> b -> c) -> b -> a -> c
 * ```
 *
 * @param arg1 - `(a -> b -> c)`
 * @param arg2 - `b`
 * @param arg3 - `a`
 *
 * @returns `c`
 */
export default curry((fn, x, y) => fn(y, x))
