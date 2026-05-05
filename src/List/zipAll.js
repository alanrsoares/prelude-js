import zipAllWith from './zipAllWith.js'

/**
 * @remarks
 *
 * ```text
 * zipAll :: [a] -> [b] -> [[a, b]]
 * ```
 *
 * @param arg1 - `[a]`
 * @param arg2 - `[b]`
 *
 * @returns `[[a, b]]`
 */
export default (xs, ys) => zipAllWith((x, y) => [x, y], xs, ys)
