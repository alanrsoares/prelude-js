import keys from './keys.js'

/**
 * values :: {a: b} -> [b]
 *
 * @remarks
 * @param arg1 - `{a: b}`
 * @returns `[b]`
 */
export default Object.values || ((x) => keys(x).map((k) => x[k]))
