import find from './find';

//+ intersection :: ([a], [a], ...) -> [a]
export default (xs, ...yss) =>
  xs.filter((x) => yss.some(find((y) => y === x)));
