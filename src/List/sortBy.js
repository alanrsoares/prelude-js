import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * sortBy :: (a -> b) -> [a] -> [a]
 * ```
 *
 * @param arg1 - `(a -> b)`
 * @param arg2 - `[a]`
 *
 * @returns `[a]`
 */
export default curry((fn, xs) => xs.concat()
  .sort((x, y) => fn(x) > fn(y)
    ? 1
    : fn(x) < fn(y)
      ? -1
      : 0
  ))
