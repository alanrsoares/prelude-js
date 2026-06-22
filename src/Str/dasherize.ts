/**
 * Inserts a dash before each upper-case letter and lower-cases it.
 *
 * @example
 * ```ts
 * dasherize('fooBar') //=> 'foo-bar'
 * ```
 */
const dasherize = (value: string): string => value.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)

export default dasherize
