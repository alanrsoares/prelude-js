import type { Accessor } from '../types.d.ts'

declare const maximumBy: <A, B>(fn: Accessor<A, B>, xs: readonly A[]) => A | undefined
export default maximumBy
