import uniqueBy from './uniqueBy';
import id from '../General/id';

//+ unique :: [a] -> [a]
export default (xs) => uniqueBy(id, xs);
