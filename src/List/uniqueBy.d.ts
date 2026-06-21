import type { Accessor } from '../types.d.ts'

declare const uniqueBy: <A, B>(fn: Accessor<A, B>, xs: readonly A[]) => B[]
export default uniqueBy
