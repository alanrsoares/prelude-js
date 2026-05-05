import map from './map.js'

/**
 * @remarks
 *
 * ```text
 * objToPairs :: {a: b} -> [[a, b]]
 * ```
 *
 * @param arg1 - `{a: b}`
 *
 * @returns `[[a, b]]`
 */
export default map((k, v) => [k, v])
