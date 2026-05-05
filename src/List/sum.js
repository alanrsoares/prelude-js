import add from '../Num/add.js'

/**
 * sum :: [Number] -> Number
 *
 * @remarks
 * @param arg1 - `[Number]`
 * @returns `Number`
 */
export default (xs) => xs.reduceRight(add)
