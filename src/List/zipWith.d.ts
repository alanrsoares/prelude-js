export default function zipWith<A, B, C>(fn: (left: A, right: B) => C): (xs: readonly A[]) => (ys: readonly B[]) => C[]
export default function zipWith<A, B, C>(fn: (left: A, right: B) => C, xs: readonly A[]): (ys: readonly B[]) => C[]
export default function zipWith<A, B, C>(fn: (left: A, right: B) => C, xs: readonly A[], ys: readonly B[]): C[]
