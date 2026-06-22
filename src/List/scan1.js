import curry from '../Func/curry.js'
import head from './head.js'
import scan from './scan.js'
import tail from './tail.js'

/**
 * scan1 :: (a -> a -> a) -> [a] -> [a]
 *
 * @remarks
 * @param arg1 - `(a -> a -> a)`
 * @param arg2 - `[a]`
 * @returns `[a]`
 */
export default curry((fn, xs) => (!xs.length ? undefined : scan(fn, head(xs), tail(xs))))
