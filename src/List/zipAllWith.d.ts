declare const zipAllWith: <A, B, C>(
  fn: (left: A | undefined, right: B | undefined) => C,
  xs: readonly A[],
  ys: readonly B[],
) => C[]
export default zipAllWith
