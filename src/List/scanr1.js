import curry from '../Func/curry.js'
import scanr from './scanr.js'
import last from './last.js'
import initial from './initial.js'

/**
 * @remarks
 *
 * ```text
 * scanr1 :: (a -> a -> a) -> [a] -> [a]
 * ```
 *
 * @param arg1 - `(a -> a -> a)`
 * @param arg2 - `[a]`
 *
 * @returns `[a]`
 */
export default curry((fn, xs) => !xs.length ? undefined : scanr(fn, last(xs), initial(xs)))
