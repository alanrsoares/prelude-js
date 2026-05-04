// + words :: String -> String[]
export default (str) => {
  const trimmed = str.trim()

  return trimmed ? trimmed.split(/\s+/) : []
}
