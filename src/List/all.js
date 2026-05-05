import deny from '../Func/deny.js'
import any from './any.js'

/**
 * @remarks
 *
 * ```text
 * all :: (a -> Boolean) -> [a] -> Boolean
 * ```
 *
 * @param arg1 - `(a -> Boolean)`
 * @param arg2 - `[a]`
 *
 * @returns `Boolean`
 */
export default deny(any)
