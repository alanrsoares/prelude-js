import curry from '../Func/curry.js'
import keys from './keys.js'

/**
 * reduce :: (a -> b) -> a -> b -> a
 *
 * @remarks
 * @param arg1 - `(a -> b)`
 * @param arg2 - `a`
 * @param arg3 - `b`
 * @returns `a`
 */
export default curry((fn, initial, x) => keys(x).reduce((acc, k, i) => fn(acc, k, x[k], i, x), initial))
