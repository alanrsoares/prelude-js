import curry from '../Func/curry.js'
import reverse from '../List/reverse.js'
import scan from '../List/scan.js'

/**
 * scanr :: (a -> b -> b) -> b -> [a] -> [b]
 *
 * @remarks
 * @param arg1 - `(a -> b -> b)`
 * @param arg2 - `b`
 * @param arg3 - `[a]`
 * @returns `[b]`
 */
export default curry((fn, init, xs) => reverse(scan(fn, init, reverse(xs))))
