declare const fold1: <A>(fn: (acc: A, value: A) => A, xs: readonly A[]) => A
export default fold1
