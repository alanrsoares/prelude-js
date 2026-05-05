import curry from '../Func/curry.js'
import concat from './concat.js'
import map from './map.js'

/**
 * @remarks
 *
 * ```text
 * concatMap :: (a -> [b]) -> [a] -> [b]
 * ```
 *
 * @param arg1 - `(a -> [b])`
 * @param arg2 - `[a]`
 *
 * @returns `[b]`
 */
export default curry((fn, xs) => concat(map(fn, xs)))
