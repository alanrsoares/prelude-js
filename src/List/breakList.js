import curry from '../Func/curry.js'
import deny from '../Func/deny.js'
import span from './span.js'

/**
 * @remarks
 *
 * ```text
 * breakList :: (a -> Bool) -> [a] -> [[a], [a]]
 * ```
 */
export default curry((fn, xs) => span(deny(fn), xs))
