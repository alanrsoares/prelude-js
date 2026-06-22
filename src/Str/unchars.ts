/**
 * Joins an array of characters into a string.
 *
 * @example
 * ```ts
 * unchars(['a', 'b', 'c']) //=> 'abc'
 * ```
 */
const unchars = (value: readonly string[]): string => value.join('')

export default unchars
