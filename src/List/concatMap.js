import curry from '../Func/curry.js'
import concat from './concat.js'
import map from './map.js'

/**
 * @remarks
 *
 * ```text
 * concatMap :: (a -> [b]) -> [a] -> [b]
 * ```
 */
export default curry((fn, xs) => concat(map(fn, xs)))
