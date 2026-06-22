/**
 * Joins an array of lines with newlines.
 *
 * @example
 * ```ts
 * unlines(['a', 'b']) //=> 'a\nb'
 * ```
 */
const unlines = (value: readonly string[]): string => value.join('\n')

export default unlines
