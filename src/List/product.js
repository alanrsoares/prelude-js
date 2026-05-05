/**
 * product :: [Number] -> Number
 *
 * @remarks
 * @param arg1 - `[Number]`
 * @returns `Number`
 */
export default (xs) => xs.reduceRight((x, y) => x * y)
