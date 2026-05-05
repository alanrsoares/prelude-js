import curry from '../Func/curry.js'
import fix from '../Func/fix.js'

/**
 * @remarks
 *
 * ```text
 * find :: (a -> Boolean) -> [a] -> a
 * ```
 *
 * @param arg1 - `(a -> Boolean)`
 * @param arg2 - `[a]`
 *
 * @returns `a`
 */
export default fix((find) => curry((fn, [x, ...xs]) => x
  ? fn(x) ? x : find(fn, xs)
  : undefined
))
