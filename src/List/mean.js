import sum from './sum.js'

/**
 * @remarks
 *
 * ```text
 * mean :: [Number] -> Number
 * ```
 *
 * @param arg1 - `[Number]`
 *
 * @returns `Number`
 */
export default (xs) => sum(xs) / xs.length
