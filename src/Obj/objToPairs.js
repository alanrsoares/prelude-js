import map from './map.js'

/**
 * objToPairs :: {a: b} -> [[a, b]]
 *
 * @remarks
 * @param arg1 - `{a: b}`
 * @returns `[[a, b]]`
 */
export default map((k, v) => [k, v])
