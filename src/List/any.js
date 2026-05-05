import curry from '../Func/curry.js'

/**
 * any :: (a -> Boolean) -> [a] -> Boolean
 *
 * @remarks
 * @param arg1 - `(a -> Boolean)`
 * @param arg2 - `[a]`
 * @returns `Boolean`
 */
export default curry((fn, xs) => xs.some(fn))
