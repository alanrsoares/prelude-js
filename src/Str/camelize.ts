/**
 * Converts a dash-separated string to camelCase.
 *
 * @example
 * ```ts
 * camelize('foo-bar') //=> 'fooBar'
 * ```
 */
const camelize = (value: string): string => value.replace(/-(\w)/g, (m) => m[1].toUpperCase())

export default camelize
