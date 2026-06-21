import type { Accessor } from '../types.d.ts'

declare const sortBy: <A, B>(fn: Accessor<A, B>, xs: readonly A[]) => A[]
export default sortBy
