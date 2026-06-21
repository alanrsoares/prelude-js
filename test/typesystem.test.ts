import { describe, expect, it } from 'bun:test'
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
import { type TypeEqual, type TypeOf, expectType } from 'ts-expect'
import type { Curried, DeepReadonly, Reverse } from '../src/types'

type Frozen = DeepReadonly<{ nested: { values: number[] } }>
const curried = null as unknown as Curried<[number, string], boolean>
const frozen = null as unknown as Frozen
const neverRun = () => false

describe('typesystem', () => {
  it('hardened type assertions', () => {
    type FuncBarrel = typeof import('preludejs/Func')
    type RootBarrel = typeof import('preludejs')

    expectType<TypeEqual<Reverse<readonly [1, 2, 3]>, readonly [3, 2, 1]>>(true)
    expectType<TypeOf<readonly [3, 2, 1], Reverse<readonly [1, 2, 3]>>>(true)
    expectType<TypeEqual<'default' extends keyof FuncBarrel ? true : false, false>>(true)
    expectType<TypeEqual<'default' extends keyof RootBarrel ? true : false, false>>(true)

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
    expectType<TypeEqual<typeof age, 32>>(true)

    const parts = split(',')('a,b')
    expectType<TypeEqual<typeof parts, string[]>>(true)

    const identity = id('ok' as const)
    expectType<TypeEqual<typeof identity, 'ok'>>(true)

    const repeated = replicate(3, 'x')
    expectType<TypeEqual<typeof repeated, string[]>>(true)

    const joined = join('-')(['a', 'b'])
    expectType<TypeEqual<typeof joined, string>>(true)

    const listLength = length([1, 2, 3])
    expectType<TypeEqual<typeof listLength, number>>(true)

    const sum = add(1)(2)
    expectType<TypeEqual<typeof sum, number>>(true)

    const rootValue = RootFunc.const('alpha')(false)
    expectType<TypeEqual<typeof rootValue, string>>(true)

    const rootIdentity = RootGeneral.id('beta' as const)
    expectType<TypeEqual<typeof rootIdentity, 'beta'>>(true)

    const rootLength = RootList.length([1, 2, 3])
    expectType<TypeEqual<typeof rootLength, number>>(true)

    const rootSum = RootNum.add(1)(2)
    expectType<TypeEqual<typeof rootSum, number>>(true)

    const rootObject = RootObj.get({ answer: 42 }, 'answer')
    expectType<TypeEqual<typeof rootObject, number>>(true)

    const rootJoined = RootStr.join('-')(['a', 'b'])
    expectType<TypeEqual<typeof rootJoined, string>>(true)

    const rootMap = RootList.map((value: number) => value + 1, [1, 2, 3] as const)
    expectType<TypeEqual<typeof rootMap, number[]>>(true)
    expectType<TypeOf<readonly number[], typeof rootMap>>(true)

    if (neverRun()) {
      // @ts-expect-error - deep readonly blocks mutation
      frozen.nested.values.push(1)

      // @ts-expect-error - wrong deep import argument type
      map((value: number) => value + 1, ['x'])

      // @ts-expect-error - invalid object key
      get(person, 'missing')

      const _curriedResult: boolean = curried(1, 'x')
      const _curriedStep: boolean = curried(1)('x')
      expect(_curriedResult).toBe(true)
      expect(_curriedStep).toBe(true)
    }

    expect(true).toBe(true)
  })
})
