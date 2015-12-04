import curry from '../Func/curry';

//+ zipWith ::
export default curry((f, xs, ys) =>
  xs.reduce((acc, x, i) => i === ys.length ? acc : acc.concat([f(x, ys[i])]), [])
);
