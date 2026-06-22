import reduce from './reduce.js'

/**
 * Returns true when every item in the list is truthy.
 *
 * @example
 * ```ts
 * and([1, 2, 3]) //=> true
 * ```
 */
const and = reduce((acc: boolean, x: unknown) => acc && !!x, true) as unknown as (
  xs: readonly unknown[],
) => boolean

export default and
