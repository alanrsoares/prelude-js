/**
 * @remarks
 *
 * ```text
 * memoize :: (a -> b) -> a -> b
 * ```
 *
 * @param arg1 - `(a -> b)`
 * @param arg2 - `a`
 *
 * @returns `b`
 */
export default (fn) => {
  const memo = {}
  return (...args) => {
    const key = args.map((arg) => arg + typeof arg).join('')
    return (key in memo) ? memo[key] : (memo[key] = fn(...args))
  }
}
