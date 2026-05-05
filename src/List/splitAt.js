import curry from '../Func/curry.js'
import drop from './drop.js'
import take from './take.js'

/**
 * @remarks
 *
 * ```text
 * splitAt :: Number -> [a] -> [[a], [a]]
 * ```
 *
 * @param arg1 - `Number`
 * @param arg2 - `[a]`
 *
 * @returns `[[a], [a]]`
 */
export default curry((index, xs) => [take(index, xs), drop(index, xs)])
