import curry from '../Func/curry.js'

/**
 * elem :: a -> [a] -> Boolean
 *
 * @remarks
 * @param arg1 - `a`
 * @param arg2 - `[a]`
 * @returns `Boolean`
 */
export default curry((value, xs) => xs.includes(value))
