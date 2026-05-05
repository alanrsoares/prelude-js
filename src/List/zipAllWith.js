import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * zipAllWith :: (a -> b -> c) -> [a] -> [b] -> [c]
 * ```
 *
 * @param arg1 - `(a -> b -> c)`
 * @param arg2 - `[a]`
 * @param arg3 - `[b]`
 *
 * @returns `[c]`
 */
export default curry((fn, xs, ys) => {
  const length = Math.max(xs.length, ys.length)

  return Array.from({ length }, (_, index) => fn(xs[index], ys[index]))
})
