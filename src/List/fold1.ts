import foldl1 from './foldl1.js'

/**
 * Left fold over a non-empty list using its head as the seed. Alias of {@link foldl1}.
 *
 * @example
 * ```ts
 * fold1((acc: number, x: number) => acc + x, [1, 2, 3]) //=> 6
 * ```
 */
const fold1 = foldl1

export default fold1
