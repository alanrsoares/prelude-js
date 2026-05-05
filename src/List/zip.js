import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * zip :: [a] -> [b] -> [[a, b]]
 * ```
 *
 * @param arg1 - `[a]`
 * @param arg2 - `[b]`
 *
 * @returns `[[a, b]]`
 */
export default curry((xs, ys) => xs.reduce((acc, x, i) => i === ys.length ? acc : acc.concat([[x, ys[i]]]), [])
)
