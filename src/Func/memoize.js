/**
 * memoize :: (a -> b) -> a -> b
 *
 * @remarks
 * @param arg1 - `(a -> b)`
 * @param arg2 - `a`
 * @returns `b`
 */
export default (fn) => {
  const memo = {}
  return (...args) => {
    const key = args.map((arg) => arg + typeof arg).join('')
    if (!(key in memo)) {
      memo[key] = fn(...args)
    }
    return memo[key]
  }
}
