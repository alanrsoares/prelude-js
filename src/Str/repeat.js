import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * repeat :: Number -> String -> String
 * ```
 */
export default curry((count, str) => (str || '').repeat(count))
