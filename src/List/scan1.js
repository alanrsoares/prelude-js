import curry from '../Func/curry';
import scan from './scan';

export default curry((fn, [head, ...tail]) => tail && scan(fn, head, tail));
