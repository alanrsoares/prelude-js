import curry from '../Func/curry.js'

/**
 * each :: (a -> b) -> [a] -> void
 *
 * @remarks
 * @param arg1 - `(a -> b)`
 * @param arg2 - `[a]`
 * @returns `void`
 */
export default curry((fn, xs) => xs.forEach(fn))
