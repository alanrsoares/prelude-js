import ofType from '../General/ofType.js'
import concatMap from './concatMap.js'

const flatten = (ys) => concatMap((xs) => ofType('Array', xs) ? flatten(xs) : xs, ys)

/**
 * @remarks
 *
 * ```text
 * flatten :: List -> List
 * ```
 */
export default flatten
