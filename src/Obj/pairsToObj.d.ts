declare const pairsToObj: <K extends PropertyKey, V>(
  pairs: ReadonlyArray<readonly [K, V]>,
) => Record<K, V>
export default pairsToObj
