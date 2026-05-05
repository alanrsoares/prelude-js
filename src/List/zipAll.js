import zipAllWith from './zipAllWith.js'

/**
 * zipAll :: [a] -> [b] -> [[a, b]]
 *
 * @remarks
 * @param arg1 - `[a]`
 * @param arg2 - `[b]`
 * @returns `[[a, b]]`
 */
export default (xs, ys) => zipAllWith((x, y) => [x, y], xs, ys)
