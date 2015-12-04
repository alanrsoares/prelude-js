import curry from '../Func/curry';

export default curry((xs, ys) =>
  xs.reduce((acc, x, i) => i === ys.length ? acc : acc.concat([[x, ys[i]]]), [])
);
