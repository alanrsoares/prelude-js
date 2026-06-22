declare const each: <A>(
  fn: (value: A, index: number, array: readonly A[]) => unknown,
  xs: readonly A[],
) => void
export default each
