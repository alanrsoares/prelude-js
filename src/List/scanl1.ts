import scan1 from './scan1.js'

/**
 * Left scan over a list seeded with its head. Alias of {@link scan1}.
 *
 * @example
 * ```ts
 * scanl1((a: number, b: number) => a + b, [1, 2, 3]) //=> [1, 3, 6]
 * ```
 */
const scanl1 = scan1

export default scanl1
