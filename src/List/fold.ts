import foldl from './foldl.js'

/**
 * Left-associative fold over a list with an initial accumulator. Alias of {@link foldl}.
 *
 * @example
 * ```ts
 * fold((acc: number, x: number) => acc + x, 0, [1, 2, 3]) //=> 6
 * ```
 */
const fold = foldl

export default fold
