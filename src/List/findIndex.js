import curry from '../Func/curry.js'

/**
 * findIndex :: (a -> Boolean) -> [a] -> Number
 *
 * @remarks
 * @param arg1 - `(a -> Boolean)`
 * @param arg2 - `[a]`
 * @returns `Number`
 */
export default curry((fn, xs) => xs.findIndex(fn))
