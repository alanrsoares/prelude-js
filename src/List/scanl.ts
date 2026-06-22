import scan from './scan.js'

/**
 * Left scan over a list with an initial accumulator. Alias of {@link scan}.
 *
 * @example
 * ```ts
 * scanl((a: number, b: number) => a + b, 0, [1, 2, 3]) //=> [0, 1, 3, 6]
 * ```
 */
const scanl = scan

export default scanl
