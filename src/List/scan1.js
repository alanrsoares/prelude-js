import curry from '../Func/curry';
import scan from './scan';
import head from './head';
import tail from './tail';

export default curry((fn, xs) => !xs.length ? undefined : scan(fn, head(xs), tail(xs)));
