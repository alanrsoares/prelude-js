import foldl from './foldl.js'

/**
 * @remarks
 *
 * ```text
 * fold :: (b -> a -> b) -> b -> [a] -> b
 * ```
 *
 * @param arg1 - `(b -> a -> b)`
 * @param arg2 - `b`
 * @param arg3 - `[a]`
 *
 * @returns `b`
 */
export default foldl
