import curry from '../Func/curry.js'
import foldr from './foldr.js'
import last from './last.js'
import initial from './initial.js'

/**
 * @remarks
 *
 * ```text
 * foldr1 :: (a -> a -> a) -> [a] -> a
 * ```
 *
 * @param arg1 - `(a -> a -> a)`
 * @param arg2 - `[a]`
 *
 * @returns `a`
 */
export default curry((fn, xs) => foldr(fn, last(xs), initial(xs)))
