import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * slice :: Number -> Number -> String -> String
 * ```
 */
export default curry((start, end, str) => str.slice(start, end))
