import fix from '../Func/fix';
import ofType from '../General/ofType';
import concatMap from './concatMap';

//+ flatten :: List -> List
export default fix((flatten) => concatMap((xs) => ofType('Array', xs) ? flatten(xs) : xs));
