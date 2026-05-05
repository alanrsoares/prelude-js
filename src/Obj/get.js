import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * get :: String -> {a: b} -> b
 * ```
 */
export default curry((member, x) => x[member])
