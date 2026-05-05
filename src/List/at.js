import curry from '../Func/curry.js'

/**
 * at :: Number -> [a] -> a
 *
 * @remarks
 * @param arg1 - `Number`
 * @param arg2 - `[a]`
 * @returns `a`
 */
export default curry((index, xs) => xs[index])
