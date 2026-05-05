import curry from '../Func/curry.js'

/**
 * filter :: (a -> Boolean) -> [a] -> [a]
 *
 * @remarks
 * @param arg1 - `(a -> Boolean)`
 * @param arg2 - `[a]`
 * @returns `[a]`
 */
export default curry((fn, xs) => xs.filter(fn))
