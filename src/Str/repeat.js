import curry from '../Func/curry.js'

/**
 * repeat :: Number -> String -> String
 *
 * @remarks
 * @param arg1 - `Number`
 * @param arg2 - `String`
 * @returns `String`
 */
export default curry((count, str) => (str || '').repeat(count))
