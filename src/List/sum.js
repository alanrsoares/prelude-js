import add from '../Num/add.js'

/**
 * @remarks
 *
 * ```text
 * sum :: [Number] -> Number
 * ```
 *
 * @param arg1 - `[Number]`
 *
 * @returns `Number`
 */
export default (xs) => xs.reduceRight(add)
