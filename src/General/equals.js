import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * equals :: a -> a -> Boolean
 * ```
 */
export default curry((a, b) => a === b)
