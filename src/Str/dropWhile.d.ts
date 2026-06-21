import type { Curried } from '../types.d.ts'

declare const dropWhile: Curried<[(value: string) => unknown, string], string>
export default dropWhile
