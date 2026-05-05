/**
 * @remarks
 *
 * ```text
 * words :: String -> String[]
 * ```
 *
 * @param arg1 - `String`
 *
 * @returns `String[]`
 */
export default (str) => {
  const trimmed = str.trim()

  return trimmed ? trimmed.split(/\s+/) : []
}
