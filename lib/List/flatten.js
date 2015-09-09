import ofType from '../General/ofType';
import concatMap from './concatMap';

//+ flatten :: List -> List
const flatten = (ys) => concatMap((xs) => ofType('Array', xs) ? flatten(xs) : xs, ys);

export default flatten;
