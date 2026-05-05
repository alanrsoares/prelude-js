import curry from '../Func/curry.js'
import deny from '../Func/deny.js'

/**
 * @remarks
 *
 * ```text
 * reject :: (a -> Boolean) -> [a] -> [a]
 * ```
 */
export default curry((fn, xs) => xs.filter(deny(fn)))
