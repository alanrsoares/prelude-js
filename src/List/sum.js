import add from '../Num/add.js'

/**
 * @remarks
 *
 * ```text
 * sum :: [Number] -> Number
 * ```
 */
export default (xs) => xs.reduceRight(add)
