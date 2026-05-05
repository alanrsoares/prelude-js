import map from './map.js'

/**
 * @remarks
 *
 * ```text
 * objToPairs :: {a: b} -> [[a, b]]
 * ```
 */
export default map((k, v) => [k, v])
