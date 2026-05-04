import unique from './unique.js'
import flatten from './flatten.js'

// + union :: ([a], [a], ...) -> [a]
export default (xs, ...yss) => unique(xs.concat(flatten(yss)))
