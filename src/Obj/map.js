import curry from '../Func/curry.js'
import keys from './keys.js'

/**
 * map :: ((a, b) -> c) -> {a: b} -> [c]
 *
 * @remarks
 * @param arg1 - `((a, b) -> c)`
 * @param arg2 - `{a: b}`
 * @returns `[c]`
 */
export default curry((fn, x) => keys(x).map((k, i) => fn(k, x[k], i)))
