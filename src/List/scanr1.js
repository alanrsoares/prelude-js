import curry from '../Func/curry.js'
import initial from './initial.js'
import last from './last.js'
import scanr from './scanr.js'

/**
 * scanr1 :: (a -> a -> a) -> [a] -> [a]
 *
 * @remarks
 * @param arg1 - `(a -> a -> a)`
 * @param arg2 - `[a]`
 * @returns `[a]`
 */
export default curry((fn, xs) => (!xs.length ? undefined : scanr(fn, last(xs), initial(xs))))
