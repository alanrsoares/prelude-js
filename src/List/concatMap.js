import curry from '../Func/curry.js'
import concat from './concat.js'
import map from './map.js'

/**
 * concatMap :: (a -> [b]) -> [a] -> [b]
 *
 * @remarks
 * @param arg1 - `(a -> [b])`
 * @param arg2 - `[a]`
 * @returns `[b]`
 */
export default curry((fn, xs) => concat(map(fn, xs)))
