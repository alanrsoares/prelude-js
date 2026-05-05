import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * foldr :: (b -> a -> b) -> b -> [a] -> b
 * ```
 *
 * @param arg1 - `(b -> a -> b)`
 * @param arg2 - `b`
 * @param arg3 - `[a]`
 *
 * @returns `b`
 */
export default curry((fn, acc, xs) => {
  for (let i = xs.length - 1; i >= 0; i--) {
    acc = fn(xs[i], acc)
  }
  return acc
})
