import curry from '../Func/curry.js'
import last from '../List/last.js'

/**
 * @remarks
 *
 * ```text
 * scan :: (a -> b) -> [a] -> [b]
 * ```
 *
 * @param arg1 - `(a -> b)`
 * @param arg2 - `[a]`
 *
 * @returns `[b]`
 */
export default curry((fn, init, xs) => xs.reduce((acc, x) => acc.concat(fn(last(acc), x)), [init]))
