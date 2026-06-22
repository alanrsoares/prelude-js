/**
 * Splits a string into lines on CR/LF boundaries.
 *
 * @example
 * ```ts
 * lines('a\nb') //=> ['a', 'b']
 * ```
 */
const lines = (value: string): string[] => (value.length ? value.split(/\r?\n/) : [])

export default lines
