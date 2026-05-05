import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * repeat :: Number -> String -> String
 * ```
 *
 * @param arg1 - `Number`
 * @param arg2 - `String`
 *
 * @returns `String`
 */
export default curry((count, str) => (str || '').repeat(count))
