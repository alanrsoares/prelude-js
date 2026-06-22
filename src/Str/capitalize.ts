/**
 * Upper-cases the first character of a string.
 *
 * @example
 * ```ts
 * capitalize('foo') //=> 'Foo'
 * ```
 */
const capitalize = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1)

export default capitalize
