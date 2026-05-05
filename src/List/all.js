import deny from '../Func/deny.js'
import any from './any.js'

/**
 * all :: (a -> Boolean) -> [a] -> Boolean
 *
 * @remarks
 * @param arg1 - `(a -> Boolean)`
 * @param arg2 - `[a]`
 * @returns `Boolean`
 */
export default deny(any)
