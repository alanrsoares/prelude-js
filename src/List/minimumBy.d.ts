import type { Accessor } from '../types.d.ts'

declare const minimumBy: <A, B>(fn: Accessor<A, B>, xs: readonly A[]) => A | undefined
export default minimumBy
