import ofType from '../General/ofType.js'
import concatMap from './concatMap.js'

// + flatten :: List -> List
const flatten = (ys) => concatMap((xs) => ofType('Array', xs) ? flatten(xs) : xs, ys)

export default flatten
