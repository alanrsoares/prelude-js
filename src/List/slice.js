import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * slice :: Number -> Number -> [a] -> [a]
 * ```
 */
export default curry((x, y, xs) => xs.slice(x, y))
