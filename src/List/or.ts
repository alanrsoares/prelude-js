import reduce from './reduce.js'

/**
 * Returns true when at least one item in the list is truthy.
 *
 * @example
 * ```ts
 * or([0, '', 3]) //=> true
 * ```
 */
const or = reduce((acc: boolean, x: unknown) => acc || !!x, false) as unknown as (
  xs: readonly unknown[],
) => boolean

export default or
