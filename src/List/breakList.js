import curry from '../Func/curry.js'
import deny from '../Func/deny.js'
import span from './span.js'

/**
 * breakList :: (a -> Bool) -> [a] -> [[a], [a]]
 *
 * @remarks
 * @param arg1 - `(a -> Bool)`
 * @param arg2 - `[a]`
 * @returns `[[a], [a]]`
 */
export default curry((fn, xs) => span(deny(fn), xs))
