import curry from '../Func/curry.js'

/**
 * drop :: Number -> [a] -> [a]
 *
 * @remarks
 * @param arg1 - `Number`
 * @param arg2 - `[a]`
 * @returns `[a]`
 */
export default curry((n, xs) => xs?.filter((_x, i) => i >= n))
