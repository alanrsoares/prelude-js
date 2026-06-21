import type { Curried } from '../types.d.ts'

declare const takeWhile: Curried<[(value: string) => unknown, string], string>
export default takeWhile
