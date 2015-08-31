import find from './find';

//+ difference :: ([a], [a], ...) -> [a]
export default (xs, ...yss) =>
  xs.filter((x) => !yss.some(find((y) => y === x)));
