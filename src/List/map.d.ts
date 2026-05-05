import type { Mapper } from '../types.d.ts'

export default function map<A, B>(fn: Mapper<A, B>): (xs: readonly A[]) => B[]
export default function map<A, B>(fn: Mapper<A, B>, xs: readonly A[]): B[]
