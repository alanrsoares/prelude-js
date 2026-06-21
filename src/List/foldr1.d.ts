declare const foldr1: <A>(fn: (value: A, acc: A) => A, xs: readonly A[]) => A
export default foldr1
