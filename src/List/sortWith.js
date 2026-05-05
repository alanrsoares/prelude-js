import curry from '../Func/curry.js'

/**
 * sortWith :: (a -> Number) -> [a] -> [a]
 *
 * @remarks
 * @param arg1 - `(a -> Number)`
 * @param arg2 - `[a]`
 * @returns `[a]`
 */
export default curry((fn, xs) => xs.concat().sort(fn))
