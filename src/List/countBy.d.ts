import type { Accessor } from '../types.d.ts'

declare const countBy: <A, B>(fn: Accessor<A, B>, xs: readonly A[]) => Record<string, number>
export default countBy
