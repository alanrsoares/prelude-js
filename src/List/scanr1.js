import curry from '../Func/curry';
import scanr from './scanr';
import last from './last';
import initial from './initial';

export default curry((fn, xs) => !xs.length ? undefined : scanr(fn, last(xs), initial(xs)));
