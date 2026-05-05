/**
 * @remarks
 *
 * ```text
 * curry :: ((a, b) -> c) -> a -> b -> c
 * ```
 *
 * @param arg1 - `((a, b) -> c)`
 * @param arg2 - `a`
 * @param arg3 - `b`
 *
 * @returns `c`
 */
export default function (fn, ...args) {
  const c = (fnArgs) => {
    if (fnArgs.length >= fn.length) {
      return fn.apply(this, fnArgs)
    }
    return (...cArgs) => c([...fnArgs, ...cArgs])
  }
  return c(args)
}
