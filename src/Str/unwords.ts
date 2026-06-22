/**
 * Joins an array of words with spaces.
 *
 * @example
 * ```ts
 * unwords(['foo', 'bar']) //=> 'foo bar'
 * ```
 */
const unwords = (value: readonly string[]): string => value.join(' ')

export default unwords
