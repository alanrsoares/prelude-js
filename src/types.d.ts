// biome-ignore lint/suspicious/noExplicitAny: top-level function slot type for heterogeneous callbacks
export type AnyFn = (...args: any[]) => any

export type Pair<A = unknown, B = unknown> = readonly [A, B]

export type Reverse<
  T extends readonly unknown[],
  R extends readonly unknown[] = [],
> = T extends readonly [infer H, ...infer Tail] ? Reverse<Tail, readonly [H, ...R]> : R

export type Curried<Args extends readonly unknown[], R> = Args extends readonly [
  infer Head,
  ...infer Tail,
]
  ? ((arg: Head) => Curried<Tail, R>) & ((arg: Head, ...rest: Tail) => R)
  : R

export type Compose<Fns extends readonly AnyFn[]> = Fns extends readonly [infer Only extends AnyFn]
  ? Only
  : Fns extends readonly [infer First extends AnyFn, ...infer Rest extends AnyFn[]]
    ? (...args: Parameters<Compose<Rest>>) => ReturnType<First>
    : never

export type DeepReadonly<T> = T extends AnyFn
  ? T
  : T extends readonly [infer Head, ...infer Tail]
    ? readonly [DeepReadonly<Head>, ...{ [K in keyof Tail]: DeepReadonly<Tail[K]> }]
    : T extends readonly (infer Item)[]
      ? readonly DeepReadonly<Item>[]
      : T extends object
        ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
        : T

export type Mapper<A, B> = (value: A, index: number, array: readonly A[]) => B
export type Predicate<A> = (value: A, index: number, array: readonly A[]) => unknown
export type Reducer<A, B> = (acc: A, value: B, index: number, array: readonly B[]) => A
export type Comparer<A> = (left: A, right: A) => number
export type Accessor<A, B> = (value: A, index: number, array: readonly A[]) => B

export interface FuncModule {
  apply: <A extends readonly unknown[], R>(fn: (...args: A) => R, args: A) => R
  compose: <Fns extends readonly AnyFn[]>(...fns: Fns) => Compose<Fns>
  curry: <A extends readonly unknown[], R>(fn: (...args: A) => R) => Curried<A, R>
  deny: <A extends readonly unknown[], R>(fn: (...args: A) => R) => (...args: A) => boolean
  fix: <A extends readonly unknown[], R>(
    fn: (recur: (...args: A) => R) => (...args: A) => R,
  ) => (...args: A) => R
  flip: <A extends readonly unknown[], R>(fn: (...args: A) => R) => (...args: Reverse<A>) => R
  memoize: <A extends readonly unknown[], R>(fn: (...args: A) => R) => (...args: A) => R
  uncurry: <A extends readonly unknown[], R>(fn: Curried<A, R>) => (...args: A) => R
  const: {
    <A>(value: A): <B>(_ignored: B) => A
    <A, B>(value: A, _ignored: B): A
  }
  [key: string]: AnyFn
}

export interface GeneralModule {
  id: <T>(value: T) => T
  not: (value: unknown) => boolean
  fst: <A, B>(pair: Pair<A, B>) => A
  snd: <A, B>(pair: Pair<A, B>) => B
  replicate: <T>(n: number, value: T) => T[]
  typeOf: (value: unknown) => string
  ofType: (type: string, value: unknown) => boolean
  equals: (left: unknown, right: unknown) => boolean
  areSimilar: (left: unknown, right: unknown) => boolean
  deny: (value: unknown) => boolean
  [key: string]: AnyFn
}

export interface ListModule {
  range: (to: number, from?: number, step?: number) => number[]
  map: <A, B>(fn: Mapper<A, B>, xs: readonly A[]) => B[]
  filter: <A>(fn: Predicate<A>, xs: readonly A[]) => A[]
  reject: <A>(fn: Predicate<A>, xs: readonly A[]) => A[]
  reduce: <A, B>(fn: Reducer<A, B>, initial: A, xs: readonly B[]) => A
  fold: <A, B>(fn: Reducer<A, B>, initial: A, xs: readonly B[]) => A
  foldl: <A, B>(fn: Reducer<A, B>, initial: A, xs: readonly B[]) => A
  foldr: <A, B>(
    fn: (value: B, acc: A, index: number, array: readonly B[]) => A,
    initial: A,
    xs: readonly B[],
  ) => A
  concat: <A>(xss: readonly (readonly A[])[]) => A[]
  concatMap: <A, B>(fn: Mapper<A, readonly B[]>, xs: readonly A[]) => B[]
  flatten: <A>(xss: readonly (readonly A[])[]) => A[]
  length: <A>(xs: readonly A[]) => number
  elem: <A>(value: A, xs: readonly A[]) => boolean
  notElem: <A>(value: A, xs: readonly A[]) => boolean
  find: <A>(fn: Predicate<A>, xs: readonly A[]) => A | undefined
  findIndex: <A>(fn: Predicate<A>, xs: readonly A[]) => number
  findIndices: <A>(fn: Predicate<A>, xs: readonly A[]) => number[]
  unique: <A>(xs: readonly A[]) => A[]
  uniqueBy: <A, B>(fn: Accessor<A, B>, xs: readonly A[]) => B[]
  groupBy: <A>(fn: Predicate<A>, xs: readonly A[]) => A[][]
  partition: <A>(fn: Predicate<A>, xs: readonly A[]) => [A[], A[]]
  zip: <A, B>(xs: readonly A[], ys: readonly B[]) => Array<Pair<A, B>>
  zipWith: <A, B, C>(fn: (left: A, right: B) => C, xs: readonly A[], ys: readonly B[]) => C[]
  zipAll: <A, B>(xs: readonly A[], ys: readonly B[]) => Array<Pair<A | undefined, B | undefined>>
  zipAllWith: <A, B, C>(
    fn: (left: A | undefined, right: B | undefined) => C,
    xs: readonly A[],
    ys: readonly B[],
  ) => C[]
  sort: <A>(xs: readonly A[]) => A[]
  sortBy: <A, B>(fn: Accessor<A, B>, xs: readonly A[]) => A[]
  sortWith: <A>(fn: Comparer<A>, xs: readonly A[]) => A[]
  take: <A>(count: number, xs: readonly A[]) => A[]
  drop: <A>(count: number, xs: readonly A[]) => A[]
  takeWhile: <A>(fn: Predicate<A>, xs: readonly A[]) => A[]
  dropWhile: <A>(fn: Predicate<A>, xs: readonly A[]) => A[]
  slice: <A>(start: number, end: number, xs: readonly A[]) => A[]
  splitAt: <A>(count: number, xs: readonly A[]) => [A[], A[]]
  span: <A>(fn: Predicate<A>, xs: readonly A[]) => [A[], A[]]
  breakList: <A>(fn: Predicate<A>, xs: readonly A[]) => [A[], A[]]
  scan: <A, B>(fn: Reducer<A, B>, initial: A, xs: readonly B[]) => A[]
  scan1: <A, B>(fn: Reducer<A, B>, initial: A, xs: readonly B[]) => A[]
  scanl: <A, B>(fn: Reducer<A, B>, initial: A, xs: readonly B[]) => A[]
  scanl1: <A, B>(fn: Reducer<A, B>, initial: A, xs: readonly B[]) => A[]
  scanr: <A, B>(
    fn: (value: B, acc: A, index: number, array: readonly B[]) => A,
    initial: A,
    xs: readonly B[],
  ) => A[]
  scanr1: <A, B>(
    fn: (value: B, acc: A, index: number, array: readonly B[]) => A,
    initial: A,
    xs: readonly B[],
  ) => A[]
  sum: (xs: readonly number[]) => number
  product: (xs: readonly number[]) => number
  mean: (xs: readonly number[]) => number
  maximum: <A>(xs: readonly A[]) => A | undefined
  minimum: <A>(xs: readonly A[]) => A | undefined
  maximumBy: <A, B>(fn: Accessor<A, B>, xs: readonly A[]) => A | undefined
  minimumBy: <A, B>(fn: Accessor<A, B>, xs: readonly A[]) => A | undefined
  all: <A>(fn: Predicate<A>, xs: readonly A[]) => boolean
  any: <A>(fn: Predicate<A>, xs: readonly A[]) => boolean
  and: (xs: readonly unknown[]) => boolean
  or: (xs: readonly unknown[]) => boolean
  empty: <A>(xs: readonly A[]) => boolean
  head: <A>(xs: readonly A[]) => A | undefined
  first: <A>(xs: readonly A[]) => A | undefined
  tail: <A>(xs: readonly A[]) => A[]
  last: <A>(xs: readonly A[]) => A | undefined
  initial: <A>(xs: readonly A[]) => A[]
  countBy: <A, B>(fn: Accessor<A, B>, xs: readonly A[]) => Record<string, number>
  difference: <A>(left: readonly A[], right: readonly A[]) => A[]
  intersection: <A>(left: readonly A[], right: readonly A[]) => A[]
  union: <A>(left: readonly A[], right: readonly A[]) => A[]
  unfoldr: <A, B>(fn: (seed: B) => [A, B] | undefined, seed: B) => A[]
  compact: <A>(xs: readonly A[]) => A[]
  each: <A>(fn: (value: A, index: number, array: readonly A[]) => unknown, xs: readonly A[]) => void
  [key: string]: AnyFn
}

export interface NumModule {
  add: Curried<[number, number], number>
  [key: string]: AnyFn
}

export interface ObjModule {
  keys: <T extends object>(obj: T) => Array<keyof T>
  values: <T extends object>(obj: T) => Array<T[keyof T]>
  clone: <T extends object>(obj: T) => T
  merge: <T extends object>(target: T, ...sources: Partial<T>[]) => T
  pairsToObj: <K extends PropertyKey, V>(pairs: ReadonlyArray<readonly [K, V]>) => Record<K, V>
  objToPairs: <T extends Record<PropertyKey, unknown>>(
    obj: T,
  ) => Array<readonly [keyof T, T[keyof T]]>
  reduce: <A, B extends Record<string, unknown>>(
    fn: Reducer<A, [keyof B, B[keyof B]]>,
    initial: A,
    obj: B,
  ) => A
  map: <A extends Record<string, unknown>, B>(fn: Accessor<A, B>, obj: A) => Record<string, B>
  get: <T extends Record<PropertyKey, unknown>, K extends keyof T>(obj: T, key: K) => T[K]
  [key: string]: AnyFn
}

export interface StrModule {
  split: Curried<[string, string], string[]>
  join: Curried<[string, readonly string[]], string>
  chars: (value: string) => string[]
  unchars: (value: readonly string[]) => string
  lines: (value: string) => string[]
  unlines: (value: readonly string[]) => string
  words: (value: string) => string[]
  unwords: (value: readonly string[]) => string
  capitalize: (value: string) => string
  camelize: (value: string) => string
  dasherize: (value: string) => string
  repeat: Curried<[number, string], string>
  padLeft: Curried<[string, string], string>
  contains: Curried<[string, string], boolean>
  startsWith: Curried<[string, string], boolean>
  take: Curried<[number, string], string>
  drop: Curried<[number, string], string>
  takeWhile: Curried<[(value: string) => unknown, string], string>
  dropWhile: Curried<[(value: string) => unknown, string], string>
  slice: Curried<[number, number, string], string>
  splitAt: Curried<[number, string], [string, string]>
  span: Curried<[(value: string) => unknown, string], [string, string]>
  breakStr: Curried<[(value: string) => unknown, string], [string, string]>
  reverse: (value: string) => string
  empty: (value: string) => boolean
  [key: string]: AnyFn
}

export interface PreludeNamespace {
  Func: FuncModule
  General: GeneralModule
  List: ListModule
  Num: NumModule
  Obj: ObjModule
  Str: StrModule
}
