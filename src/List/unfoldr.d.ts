declare const unfoldr: <A, B>(fn: (seed: B) => [A, B] | undefined, seed: B) => A[]
export default unfoldr
