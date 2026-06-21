import type { Curried } from '../types.d.ts'

declare const span: Curried<[(value: string) => unknown, string], [string, string]>
export default span
