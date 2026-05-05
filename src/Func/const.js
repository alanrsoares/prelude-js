import curry from './curry.js'

/**
 * const :: a -> b -> a
 *
 * @remarks
 * @param arg1 - `a`
 * @param arg2 - `b`
 * @returns `a`
 */
export default curry((x, _y) => x)
