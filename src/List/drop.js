import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * drop :: Number -> [a] -> [a]
 * ```
 */
export default curry((n, xs) => xs && xs.filter((x, i) => i >= n))
