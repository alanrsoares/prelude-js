import unique from './unique';
import flatten from './flatten';

//+ union :: ([a], [a], ...) -> [a]
export default (xs, ...yss) => unique(xs.concat(flatten(yss)));
