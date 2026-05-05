import curry from '../Func/curry.js'

/**
 * padLeft :: String -> a -> String
 *
 * @remarks
 * @param arg1 - `String`
 * @param arg2 - `a`
 * @returns `String`
 */
export default curry((p, s) => {
  const padding = p || ''
  const value = s || ''

  return padding.substring(0, padding.length - value.toString().length) + value
})
