import curry from './curry.js'

/**
 * @remarks
 *
 * ```text
 * const :: a -> b -> a
 * ```
 */
export default curry((x, _y) => x)
