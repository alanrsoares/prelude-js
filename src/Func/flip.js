import curry from './curry.js'

/**
 * @remarks
 *
 * ```text
 * flip :: (a -> b -> c) -> b -> a -> c
 * ```
 */
export default curry((fn, x, y) => fn(y, x))
