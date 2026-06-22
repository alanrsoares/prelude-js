import add from '../Num/add.js'

/**
 * Returns the sum of a list of numbers.
 *
 * @example
 * ```ts
 * sum([1, 2, 3, 4, 5]) //=> 15
 * ```
 */
export default function sum(xs: readonly number[]): number {
  return xs.reduceRight(add as (acc: number, x: number) => number)
}
