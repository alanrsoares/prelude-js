/**
 * Builds an inclusive list of numbers from `from` to `to` stepping by `step`.
 *
 * @example
 * ```ts
 * range(3) //=> [1, 2, 3]
 * ```
 */
export default function range(to: number, from = 1, step = 1): number[] {
  const result: number[] = []
  for (let i = from; i <= to; i += step) {
    result.push(i)
  }
  return result
}
