/**
 * Caches computed results, speeding up later calls with the same arguments.
 *
 * @example
 * ```ts
 * const memoF = memoize(expensiveFunction)
 * memoF(2) // slow, but result is then cached
 * memoF(2) // fast
 * ```
 */
export default function memoize<A extends readonly unknown[], R>(
  fn: (...args: A) => R,
): (...args: A) => R {
  const memo: Record<string, R> = {}
  return (...args: A) => {
    const key = args.map((arg) => arg + typeof arg).join('')
    if (!(key in memo)) {
      memo[key] = fn(...args)
    }
    return memo[key] as R
  }
}
