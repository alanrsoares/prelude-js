import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * zip :: [a] -> [b] -> [[a, b]]
 * ```
 */
export default curry((xs, ys) => xs.reduce((acc, x, i) => i === ys.length ? acc : acc.concat([[x, ys[i]]]), [])
)
