/**
 * Splits a string into words on whitespace.
 *
 * @example
 * ```ts
 * words('foo  bar') //=> ['foo', 'bar']
 * ```
 */
const words = (value: string): string[] => {
  const trimmed = value.trim()
  return trimmed ? trimmed.split(/\s+/) : []
}

export default words
