/**
 * @remarks
 *
 * ```text
 * fix :: Function -> Function
 * ```
 *
 * @param arg1 - `Function`
 *
 * @returns `Function`
 */
export default (f) => ((g) => (...args) => f(g(g)).apply(null, args))(
  (g) => (...args) => f(g(g)).apply(null, args)
)
