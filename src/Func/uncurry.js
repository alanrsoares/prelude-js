import curry from './curry.js'

/**
 * @remarks
 *
 * ```text
 * uncurry :: (a -> b -> c) -> [a, b] -> c
 * ```
 *
 * @param arg1 - `(a -> b -> c)`
 * @param arg2 - `[a, b]`
 *
 * @returns `c`
 */
export default curry((fn, args) => fn(...args))
