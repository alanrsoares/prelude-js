import reduce from './reduce.js'

const reducer = reduce((acc, key, value) => {
  acc[key] = value
  return acc
})

/**
 * @remarks
 *
 * ```text
 * merge :: {a: b} -> {a: b} -> {a: b}
 * ```
 *
 * @param arg1 - `{a: b}`
 * @param arg2 - `{a: b}`
 *
 * @returns `{a: b}`
 */
export default Object.assign || ((y, ...xs) => xs.reduce(reducer, y))
