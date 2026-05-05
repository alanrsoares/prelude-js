import Func from 'preludejs/Func'
import General from 'preludejs/General'
import List from 'preludejs/List'
import Num from 'preludejs/Num'
import Obj from 'preludejs/Obj'
import Str from 'preludejs/Str'
import compose from 'preludejs/Func/compose'
import curry from 'preludejs/Func/curry'
import map from 'preludejs/List/map'
import reduce from 'preludejs/List/reduce'
import get from 'preludejs/Obj/get'
import split from 'preludejs/Str/split'
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

const identity = General.id('ok' as const)
type _Identity = Expect<Equal<typeof identity, 'ok'>>

const repeated = General.replicate(3, 'x')
type _Repeated = Expect<Equal<typeof repeated, string[]>>

const joined = Str.join('-')(['a', 'b'])
type _Joined = Expect<Equal<typeof joined, string>>

const listLength = List.length([1, 2, 3])
type _Length = Expect<Equal<typeof listLength, number>>

const sum = Num.add(1)(2)
type _Sum = Expect<Equal<typeof sum, number>>

const rootValue = Func.const('alpha')(false)
type _Const = Expect<Equal<typeof rootValue, string>>

const numeric = Obj.get({ answer: 42 }, 'answer')
type _Numeric = Expect<Equal<typeof numeric, number>>

// @ts-expect-error - wrong deep import argument type
map((value: number) => value + 1, ['x'])

// @ts-expect-error - invalid object key
get(person, 'missing')
