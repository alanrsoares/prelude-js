import sum from './sum.js'

/**
 * Returns the arithmetic mean of a list of numbers.
 *
 * @example
 * ```ts
 * mean([1, 2, 3, 4, 5]) //=> 3
 * ```
 */
export default function mean(xs: readonly number[]): number {
  return sum(xs) / xs.length
}
