/**
 * Negates the truthiness of a value using the canonical Prelude name.
 *
 * @example
 * ```ts
 * not(true) //=> false
 * ```
 */
export default function not(value: unknown): boolean {
  return !value
}
