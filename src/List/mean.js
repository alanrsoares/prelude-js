import sum from './sum.js'

/**
 * mean :: [Number] -> Number
 *
 * @remarks
 * @param arg1 - `[Number]`
 * @returns `Number`
 */
export default (xs) => sum(xs) / xs.length
