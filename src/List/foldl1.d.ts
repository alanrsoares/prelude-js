declare const foldl1: <A>(fn: (acc: A, value: A) => A, xs: readonly A[]) => A
export default foldl1
