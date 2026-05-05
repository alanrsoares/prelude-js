import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * equals :: a -> a -> Boolean
 * ```
 *
 * @param arg1 - `a`
 * @param arg2 - `a`
 *
 * @returns `Boolean`
 */
export default curry((a, b) => a === b)
