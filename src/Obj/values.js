import keys from './keys.js'

/**
 * @remarks
 *
 * ```text
 * values :: {a: b} -> [b]
 * ```
 *
 * @param arg1 - `{a: b}`
 *
 * @returns `[b]`
 */
export default Object.values || ((x) => keys(x).map((k) => x[k]))
