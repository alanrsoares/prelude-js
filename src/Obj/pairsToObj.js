/**
 * pairsToObj :: [[a, b]] -> {a: b}
 *
 * @remarks
 * @param arg1 - `[[a, b]]`
 * @returns `{a: b}`
 */
export default (xs) =>
  xs.reduce((acc, x) => {
    acc[x[0]] = x[1]
    return acc
  }, {})
