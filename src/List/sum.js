import add from '../Num/add.js'

/**
 * `sum :: [Number] -> Number`
 */
export default (xs) => xs.reduceRight(add)
