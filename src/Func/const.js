import curry from './curry.js'

/**
 * @remarks
 *
 * ```text
 * const :: a -> b -> a
 * ```
 *
 * @param arg1 - `a`
 * @param arg2 - `b`
 *
 * @returns `a`
 */
export default curry((x, _y) => x)
