/**
 * @remarks
 *
 * ```text
 * initial :: [a] -> [a]
 * ```
 *
 * @param arg1 - `[a]`
 *
 * @returns `[a]`
 */
export default (xs) => !xs.length ? undefined : xs.slice(0, -1)
