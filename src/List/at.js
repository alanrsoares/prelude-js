import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * at :: Number -> [a] -> a
 * ```
 */
export default curry((index, xs) => xs[index])
