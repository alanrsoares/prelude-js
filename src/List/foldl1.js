import curry from '../Func/curry.js'
import fold from './fold.js'
import head from './head.js'
import tail from './tail.js'

/**
 * @remarks
 *
 * ```text
 * foldl1 :: (a -> a -> a) -> [a] -> a
 * ```
 *
 * @param arg1 - `(a -> a -> a)`
 * @param arg2 - `[a]`
 *
 * @returns `a`
 */
export default curry((fn, xs) => fold(fn, head(xs), tail(xs)))
