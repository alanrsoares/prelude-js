import curry from '../Func/curry.js'

/**
 * @remarks
 *
 * ```text
 * padLeft :: String -> a -> String
 * ```
 */
export default curry((p, s) => {
  const padding = p || ''
  const value = s || ''

  return padding.substring(0, padding.length - value.toString().length) + value
})
