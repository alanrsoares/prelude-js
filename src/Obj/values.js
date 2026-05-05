import keys from './keys.js'

/**
 * `values :: {a: b} -> [b]`
 */
export default Object.values || ((x) => keys(x).map((k) => x[k]))
