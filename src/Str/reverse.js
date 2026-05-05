import chars from './chars.js'

/**
 * @remarks
 *
 * ```text
 * reverse :: String -> String
 * ```
 *
 * @param arg1 - `String`
 *
 * @returns `String`
 */
export default (str) => chars(str).reverse().join('')
