import { curry } from '../Func';
import { range } from '../List';

//:: (Number, b) -> [b]
export const replicate = curry((n, x) => range(n).map(() => x));

export default replicate;
