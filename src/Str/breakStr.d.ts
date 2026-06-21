import type { Curried } from '../types.d.ts'

declare const breakStr: Curried<[(value: string) => unknown, string], [string, string]>
export default breakStr
