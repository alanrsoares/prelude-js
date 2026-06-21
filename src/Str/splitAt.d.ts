import type { Curried } from '../types.d.ts'

declare const splitAt: Curried<[number, string], [string, string]>
export default splitAt
