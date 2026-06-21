declare const objToPairs: <T extends Record<PropertyKey, unknown>>(
  obj: T,
) => Array<readonly [keyof T, T[keyof T]]>
export default objToPairs
