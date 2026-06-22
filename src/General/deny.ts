/**
 * Negates the truthiness of a value.
 *
 * @example
 * ```ts
 * deny(0) //=> true
 * ```
 */
const deny = (value: unknown): boolean => !value

export default deny
