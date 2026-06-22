/**
 * Returns the internal JavaScript type tag for a value.
 *
 * @example
 * ```ts
 * typeOf([]) //=> 'Array'
 * ```
 */
const typeOf = (value: unknown): string => {
  const match = {}.toString.call(value).match(/\[object (\w+)\]/)
  return match ? match[1] : ''
}

export default typeOf
