import deny from '../Func/deny.js'
import any from './any.js'

/**
 * @remarks
 *
 * ```text
 * all :: (a -> Boolean) -> [a] -> Boolean
 * ```
 */
export default deny(any)
