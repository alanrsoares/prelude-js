import type { Reducer } from '../types.d.ts'

export default function reduce<A, B>(fn: Reducer<A, B>): (initial: A) => (xs: readonly B[]) => A
export default function reduce<A, B>(fn: Reducer<A, B>, initial: A): (xs: readonly B[]) => A
export default function reduce<A, B>(fn: Reducer<A, B>, initial: A, xs: readonly B[]): A
