import {
  Func as RootFunc,
  General as RootGeneral,
  List as RootList,
  Num as RootNum,
  Obj as RootObj,
  Str as RootStr,
} from 'preludejs'
import { compose, curry } from 'preludejs/Func'
import { id, replicate } from 'preludejs/General'
import { length, reduce } from 'preludejs/List'
import map from 'preludejs/List/map'
import { add } from 'preludejs/Num'
import { get } from 'preludejs/Obj'
import { join, split } from 'preludejs/Str'
import type { Curried, DeepReadonly, Reverse } from '../src/types'

type Equal<L, R> = (<T>() => T extends L ? 1 : 2) extends <T>() => T extends R ? 1 : 2
  ? true
  : false
type Expect<T extends true> = T

type _Reverse = Expect<Equal<Reverse<readonly [1, 2, 3]>, readonly [3, 2, 1]>>

type Frozen = DeepReadonly<{ nested: { values: number[] } }>

declare const curried: Curried<[number, string], boolean>
const _curriedResult: boolean = curried(1, 'x')
const _curriedStep: boolean = curried(1)('x')

declare const frozen: Frozen
// @ts-expect-error - deep readonly blocks mutation
frozen.nested.values.push(1)

const piped = compose(
  (value: number) => value.toString(),
  (value: boolean) => (value ? 1 : 0),
)
const _pipedResult: string = piped(true)

const curriedAdd = curry((left: number, right: number) => left + right)
const _addResult: number = curriedAdd(1)(2)

const mapped = map((value: number) => value + 1, [1, 2, 3] as const)
const _mappedResult: number[] = mapped

const reduced = reduce((acc: number, value: number) => acc + value, 0, [1, 2, 3] as const)
const _reducedResult: number = reduced

const person = { name: 'Ava', age: 32 } as const
const age = get(person, 'age')
type _Age = Expect<Equal<typeof age, 32>>

const parts = split(',')('a,b')
type _Parts = Expect<Equal<typeof parts, string[]>>

const identity = id('ok' as const)
type _Identity = Expect<Equal<typeof identity, 'ok'>>

const repeated = replicate(3, 'x')
type _Repeated = Expect<Equal<typeof repeated, string[]>>

const joined = join('-')(['a', 'b'])
type _Joined = Expect<Equal<typeof joined, string>>

const listLength = length([1, 2, 3])
type _Length = Expect<Equal<typeof listLength, number>>

const sum = add(1)(2)
type _Sum = Expect<Equal<typeof sum, number>>

const rootValue = RootFunc.const('alpha')(false)
type _RootConst = Expect<Equal<typeof rootValue, string>>

const rootIdentity = RootGeneral.id('beta' as const)
type _RootIdentity = Expect<Equal<typeof rootIdentity, 'beta'>>

const rootLength = RootList.length([1, 2, 3])
type _RootLength = Expect<Equal<typeof rootLength, number>>

const rootSum = RootNum.add(1)(2)
type _RootSum = Expect<Equal<typeof rootSum, number>>

const rootObject = RootObj.get({ answer: 42 }, 'answer')
type _RootObject = Expect<Equal<typeof rootObject, number>>

const rootJoined = RootStr.join('-')(['a', 'b'])
type _RootJoined = Expect<Equal<typeof rootJoined, string>>

const rootMap = RootList.map((value: number) => value + 1, [1, 2, 3] as const)
type _RootMap = Expect<Equal<typeof rootMap, number[]>>

// @ts-expect-error - wrong deep import argument type
map((value: number) => value + 1, ['x'])

// @ts-expect-error - invalid object key
get(person, 'missing')
