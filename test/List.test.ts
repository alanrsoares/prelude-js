import { describe, expect, it } from 'bun:test'
import id from '../src/General/id.js'
import * as List from '../src/List/index.js'
import get from '../src/Obj/get.js'
import type { Accessor } from '../src/types.js'

describe('List.range', () => {
  it.each<{ args: [number, number?]; expected: number[] }>([
    { args: [0], expected: [] },
    { args: [1], expected: [1] },
    { args: [3], expected: [1, 2, 3] },
    { args: [10, 8], expected: [8, 9, 10] },
  ])('range(...$args) === $expected', ({ args, expected }) => {
    expect(List.range(...args)).toEqual(expected)
  })

  it('spans inclusive bounds', () => {
    expect(List.range(100, 50).length).toBe(51)
  })
})

describe('List.each', () => {
  it('applies a function to each item for its side effect', () => {
    const input = [1, 2, 3, 4, 5]
    const output: number[] = []

    List.each((x) => output.push(++x), input)
    expect(output).toEqual([2, 3, 4, 5, 6])
  })
})

describe('List.map', () => {
  it.each<{ fn: (x: number) => number; input: number[]; expected: number[] }>([
    { fn: (x) => ++x, input: [1, 2, 3, 4, 5], expected: [2, 3, 4, 5, 6] },
    { fn: (x) => --x, input: [2, 3, 4, 5, 6], expected: [1, 2, 3, 4, 5] },
    { fn: (x) => x * 2, input: [1, 2, 3, 4, 5], expected: [2, 4, 6, 8, 10] },
  ])('map(fn, $input) === $expected', ({ fn, input, expected }) => {
    expect(List.map(fn, input)).toEqual(expected)
  })
})

describe('List.compact', () => {
  it('keeps only truthy values', () => {
    expect(List.compact([0, true, 1, 2, false, 4, 5])).toEqual([true, 1, 2, 4, 5])
  })
})

describe('List.filter', () => {
  it('keeps values that satisfy the predicate', () => {
    expect(List.filter((x) => x > 3, [0, 1, 2, 3, 4, 5])).toEqual([4, 5])
  })
})

describe('List.reject', () => {
  it('drops values that satisfy the predicate', () => {
    expect(List.reject((x) => x, [0, true, 1, 2, false, 4, 5])).toEqual([0, false])
  })
})

describe('List.partition', () => {
  it('splits into passing and failing values', () => {
    expect(List.partition((x) => x, [0, true, 1, 2, false, 4, 5])).toEqual([
      [true, 1, 2, 4, 5],
      [0, false],
    ])
  })
})

describe('List.find', () => {
  const input = [1, 2, 3, 4, 5]

  it.each<{ name: string; predicate: (x: number) => boolean; expected: number | undefined }>([
    { name: 'the exact match', predicate: (x) => x === 4, expected: 4 },
    { name: 'the first ambiguous match', predicate: (x) => x > 2, expected: 3 },
    { name: 'undefined when nothing matches', predicate: (x) => x === 12, expected: undefined },
  ])('returns $name', ({ predicate, expected }) => {
    expect(List.find(predicate, input)).toBe(expected)
  })
})

describe('List.elem', () => {
  it.each([
    { value: 3, xs: [1, 2, 3], expected: true },
    { value: 4, xs: [1, 2, 3], expected: false },
  ])('elem($value, $xs) === $expected', ({ value, xs, expected }) => {
    expect(List.elem(value, xs)).toBe(expected)
  })
})

describe('List.notElem', () => {
  it.each([
    { value: 3, xs: [1, 2, 3], expected: false },
    { value: 4, xs: [1, 2, 3], expected: true },
  ])('notElem($value, $xs) === $expected', ({ value, xs, expected }) => {
    expect(List.notElem(value, xs)).toBe(expected)
  })
})

describe('List.head / List.first', () => {
  const input = [1, 2, 3, 4, 5]

  it('returns the first value', () => {
    expect(List.head(input)).toBe(1)
    expect(List.first(input)).toBe(1)
  })
})

describe('List.tail', () => {
  it('returns all but the first value', () => {
    expect(List.tail([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5])
  })
})

describe('List.last', () => {
  it('returns the last value', () => {
    expect(List.last([1, 2, 3, 4, 5])).toBe(5)
  })
})

describe('List.initial', () => {
  it('returns all but the last value', () => {
    expect(List.initial([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4])
  })
})

describe('List.empty', () => {
  it.each([
    { xs: [], expected: true },
    { xs: [1, 2, 3], expected: false },
  ])('empty($xs) === $expected', ({ xs, expected }) => {
    expect(List.empty(xs)).toBe(expected)
  })
})

describe('List.length', () => {
  it.each([
    { xs: [], expected: 0 },
    { xs: [1, 2, 3], expected: 3 },
  ])('length($xs) === $expected', ({ xs, expected }) => {
    expect(List.length(xs)).toBe(expected)
  })
})

describe('List.reverse', () => {
  it('reverses the order of items', () => {
    expect(List.reverse([1, 2, 0, 5, 4, 3])).toEqual([3, 4, 5, 0, 2, 1])
  })
})

describe('List.uniqueBy', () => {
  it('finds unique items by an accessor', () => {
    const input = [
      { color: 'orange' },
      { color: 'green' },
      { color: 'orange' },
      { color: 'blue' },
      { color: 'green' },
      { color: 'orange' },
    ]

    expect(List.uniqueBy((x) => x.color, input)).toEqual(['orange', 'green', 'blue'])
  })
})

describe('List.unique', () => {
  it('finds unique items', () => {
    expect(List.unique([1, 2, 3, 2, 2, 1, 3, 2, 0, 9])).toEqual([1, 2, 3, 0, 9])
  })
})

describe('List.foldl', () => {
  it('reduces left with an initial accumulator (fold alias included)', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    expect(List.foldl((x, y) => x + y, 0, input)).toBe(45)
    expect(List.fold((x, y) => x + y, 0, input)).toBe(45)
  })
})

describe('List.foldl1', () => {
  it('reduces left seeded with the head (fold1 alias included)', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    expect(List.foldl1((x) => x + 1, input)).toBe(10)
    expect(List.fold1((x) => x + 1, input)).toBe(10)
  })
})

describe('List.foldr', () => {
  it('folds right with an initial accumulator (curried)', () => {
    expect(List.foldr((x: string, y: string) => x + y, 'o')(['h', 'e', 'l', 'l'])).toBe('hello')
  })
})

describe('List.foldr1', () => {
  it('folds right seeded with the last item', () => {
    expect(List.foldr1((x, y) => x - y, [1, 2, 3, 4, 9])).toBe(7)
  })
})

describe('List.concat', () => {
  it('flattens a list of lists one level', () => {
    expect(List.concat([[1, 2], [3], [4, 5]])).toEqual([1, 2, 3, 4, 5])
  })
})

describe('List.concatMap', () => {
  it('maps then concatenates the results', () => {
    const input = [1, 2, 3]

    expect(List.concatMap((x) => [`${x}`, x], input)).toEqual(['1', 1, '2', 2, '3', 3])
    expect(List.concatMap((x) => [x, x], input)).toEqual([1, 1, 2, 2, 3, 3])
  })
})

describe('List.flatten', () => {
  it('recursively flattens nested lists', () => {
    expect(List.flatten([1, [[2], 3], [4, [[5]]]])).toEqual([1, 2, 3, 4, 5])
  })
})

describe('List.difference', () => {
  it.each<{ args: [number[], ...number[][]]; expected: number[] }>([
    { args: [[1, 2, 3, 4], [1], [4]], expected: [2, 3] },
    {
      args: [
        [1, 2, 3],
        [2, 1, 3],
        [3, 1, 2],
      ],
      expected: [],
    },
    {
      args: [
        [1, 2, 3],
        [101, 2, 1, 10],
        [2, 1],
        [-1, 0, 1, 2],
      ],
      expected: [3],
    },
    { args: [[1, 2, 3, 4, 5], [5, 2, 10], [9]], expected: [1, 3, 4] },
  ])('difference(...$args) === $expected', ({ args, expected }) => {
    expect(List.difference(...args)).toEqual(expected)
  })
})

describe('List.intersection', () => {
  it.each<{ args: [number[], ...number[][]]; expected: number[] }>([
    {
      args: [
        [1, 2, 3],
        [2, 1, 3],
        [3, 1, 2],
      ],
      expected: [1, 2, 3],
    },
    {
      args: [
        [1, 2, 3],
        [101, 2, 1, 10],
        [2, 1],
        [-1, 0, 1, 2],
      ],
      expected: [1, 2],
    },
    { args: [[2, 3], [9, 8], [12, 1], [99]], expected: [] },
  ])('intersection(...$args) === $expected', ({ args, expected }) => {
    expect(List.intersection(...args)).toEqual(expected)
  })
})

describe('List.union', () => {
  it.each<{ args: [number[], ...number[][]]; expected: number[] }>([
    { args: [[1, 2, 3, 4], [2, 4, 5], [9], []], expected: [1, 2, 3, 4, 5, 9] },
    { args: [[1, 5, 7], [3, 5], []], expected: [1, 5, 7, 3] },
  ])('union(...$args) === $expected', ({ args, expected }) => {
    expect(List.union(...args)).toEqual(expected)
  })
})

describe('List.countBy', () => {
  // The table pairs heterogeneous accessors with inputs; the cast bridges the loop.
  it.each<{ input: readonly unknown[]; predicate: unknown; expected: Record<string, number> }>([
    { input: [4.2, 4.4, 9.8], predicate: Math.floor, expected: { 4: 2, 9: 1 } },
    { input: ['foo', 'bar', 'burp'], predicate: get('length'), expected: { 3: 2, 4: 1 } },
    {
      input: [-3, 1, 2, 3, 4, 5],
      predicate: (x: number) => x > 2,
      expected: { true: 3, false: 3 },
    },
  ])('counts $input by its accessor', ({ input, predicate, expected }) => {
    const accessor = predicate as Accessor<unknown, PropertyKey>
    expect(List.countBy(accessor, input)).toEqual(expected)
  })
})

describe('List.groupBy', () => {
  it('groups by a numeric accessor', () => {
    expect(List.groupBy(Math.floor, [4.2, 4.4, 9.8])).toEqual({ 4: [4.2, 4.4], 9: [9.8] })
  })

  it('groups strings by length', () => {
    expect(List.groupBy(get('length'), ['one', 'two', 'three'])).toEqual({
      3: ['one', 'two'],
      5: ['three'],
    })
  })

  it('groups by a boolean predicate', () => {
    expect(List.groupBy((x) => x > 2, [-3, 1, 2, 3, 4, 5])).toEqual({
      true: [3, 4, 5],
      false: [-3, 1, 2],
    })
  })
})

describe('List.and', () => {
  it('returns true only when every item is truthy', () => {
    const neither = (xs: number[], y: number) => List.and(xs.map((x) => x !== y))
    expect(neither([1, 2], 2)).toBe(false)
    expect(neither([1, 2], 3)).toBe(true)
    expect(List.and([1, 2, 3])).toBe(true)
    expect(List.and([3, 2, false])).toBe(false)
  })
})

describe('List.or', () => {
  it('returns true when any item is truthy', () => {
    const either = (xs: number[], y: number) => List.or(xs.map((x) => x === y))
    expect(either([1, 2], 2)).toBe(true)
    expect(either([1, 2], 3)).toBe(false)
    expect(List.or([1, 2, 3])).toEqual(true)
    expect(List.or([0, '', null, false])).toBe(false)
  })
})

describe('List.any', () => {
  it('returns true on the first item that satisfies the predicate', () => {
    expect(List.any((x) => x > 2, [1, 2, 3])).toBe(true)
    expect(List.any((x) => x.length > 3, ['foo', 'bar', 'buzz'])).toEqual(true)
    expect(List.any((x) => x.length < 3, ['foo', 'bar', 'buzz'])).toEqual(false)
  })
})

describe('List.all', () => {
  it('returns true only when every item satisfies the predicate', () => {
    expect(List.all((x) => x > 0, [1, 2, 3])).toBe(true)
    expect(List.all((x) => x, [1, 2, 3])).toBe(true)
    expect(List.all((x) => x.length > 3, ['foo', 'bar', 'buzz'])).toBe(false)
  })
})

describe('List.sort', () => {
  it.each<{ input: number[]; expected: number[] }>([
    { input: [1, 3, 2], expected: [1, 2, 3] },
    { input: [1, 3, 2, 0], expected: [0, 1, 2, 3] },
  ])('sort($input) === $expected without mutating', ({ input, expected }) => {
    expect(List.sort(input)).toEqual(expected)
  })
})

describe('List.sortWith', () => {
  it('sorts with a custom comparator', () => {
    const sorter = (x: string, y: string) =>
      x.length > y.length ? 1 : x.length < y.length ? -1 : 0
    expect(List.sortWith(sorter, ['three', 'one', 'two'])).toEqual(['one', 'two', 'three'])
  })
})

describe('List.sortBy', () => {
  it('sorts by an accessor', () => {
    expect(List.sortBy(get('length'), ['three', 'one', 'two'])).toEqual(['one', 'two', 'three'])
  })
})

describe('List.sum', () => {
  it('sums a list of numbers', () => {
    expect(List.sum([1, 2, 3, 4, 5])).toBe(15)
  })
})

describe('List.product', () => {
  it('multiplies a list of numbers', () => {
    expect(List.product([1, 2, 3])).toBe(6)
  })
})

describe('List.mean', () => {
  it('averages a list of numbers', () => {
    expect(List.mean([1, 2, 3, 4, 5])).toBe(3)
  })
})

describe('List.maximum', () => {
  it.each<{ xs: ReadonlyArray<number | string>; expected: number | string }>([
    { xs: [1, 2, 3, 4, 5], expected: 5 },
    { xs: [-1, -2, -3, -4, -5], expected: -1 },
    { xs: ['1', '3', '2'], expected: '3' },
    { xs: ['a', 'c', 'b'], expected: 'c' },
    { xs: ['w', 'c', 'b'], expected: 'w' },
  ])('maximum($xs) === $expected', ({ xs, expected }) => {
    expect(List.maximum(xs)).toBe(expected)
  })
})

describe('List.minimum', () => {
  it.each<{ xs: ReadonlyArray<number | string>; expected: number | string }>([
    { xs: [1, 2, 3, 4, 5], expected: 1 },
    { xs: [-1, -2, -3, -4, -5], expected: -5 },
    { xs: ['1', '3', '2'], expected: '1' },
    { xs: ['a', 'c', 'b'], expected: 'a' },
    { xs: ['w', 'c', 'b'], expected: 'b' },
  ])('minimum($xs) === $expected', ({ xs, expected }) => {
    expect(List.minimum(xs)).toBe(expected)
  })
})

describe('List.maximumBy', () => {
  const self = <A>(x: A) => x

  it.each<{ xs: ReadonlyArray<number | string>; expected: number | string }>([
    { xs: [1, 2, 3, 4, 5], expected: 5 },
    { xs: [-1, -2, -3, -4, -5], expected: -1 },
    { xs: ['1', '3', '2'], expected: '3' },
    { xs: ['a', 'c', 'b'], expected: 'c' },
    { xs: ['w', 'c', 'b'], expected: 'w' },
  ])('maximumBy(id, $xs) === $expected', ({ xs, expected }) => {
    expect(List.maximumBy(self, xs)).toBe(expected)
  })
})

describe('List.minimumBy', () => {
  const self = <A>(x: A) => x

  it.each<{ xs: ReadonlyArray<number | string>; expected: number | string }>([
    { xs: [1, 2, 3, 4, 5], expected: 1 },
    { xs: [-1, -2, -3, -4, -5], expected: -5 },
    { xs: ['1', '3', '2'], expected: '1' },
    { xs: ['a', 'c', 'b'], expected: 'a' },
    { xs: ['w', 'c', 'b'], expected: 'b' },
  ])('minimumBy(id, $xs) === $expected', ({ xs, expected }) => {
    expect(List.minimumBy(self, xs)).toBe(expected)
  })

  it('compares by an accessor', () => {
    expect(List.minimumBy(get('length'), ['was', 'a', 'test'])).toBe('a')
  })
})

describe('List.scan', () => {
  const sum = (a: number, b: number) => a + b
  const mult = (a: number, b: number) => a * b

  it('accumulates intermediate values (scanl alias included)', () => {
    expect(List.scan(sum, 0, [1, 2, 3])).toEqual([0, 1, 3, 6])
    expect(List.scan(mult, 1, [2, 3, 4])).toEqual([1, 2, 6, 24])
    expect(List.scanl(sum, 0, [1, 2, 3])).toEqual([0, 1, 3, 6])
    expect(List.scanl(mult, 1, [2, 3, 4])).toEqual([1, 2, 6, 24])
  })
})

describe('List.scan1', () => {
  const sum = (a: number, b: number) => a + b
  const mult = (a: number, b: number) => a * b

  it('seeds with the head and returns undefined on empty (scanl1 alias included)', () => {
    expect(List.scan1(sum, [1, 2, 3])).toEqual([1, 3, 6])
    expect(List.scan1(mult, [1, 2, 3])).toEqual([1, 2, 6])
    expect(List.scan1(mult, [])).toEqual(undefined)
    expect(List.scanl1(sum, [1, 2, 3])).toEqual([1, 3, 6])
    expect(List.scanl1(mult, [1, 2, 3])).toEqual([1, 2, 6])
    expect(List.scanl1(mult, [])).toEqual(undefined)
  })
})

describe('List.take', () => {
  const input = [2, 3, 5, 8, 1, 0, 9]

  it.each<{ n: number; expected: number[] }>([
    { n: 2, expected: [2, 3] },
    { n: 3, expected: [2, 3, 5] },
    { n: 1, expected: [2] },
    { n: 0, expected: [] },
    { n: null as unknown as number, expected: [] },
    { n: 4, expected: [2, 3, 5, 8] },
  ])('take($n) === $expected', ({ n, expected }) => {
    expect(List.take(n, input)).toEqual(expected)
  })
})

describe('List.takeWhile', () => {
  it('takes leading items while the predicate holds', () => {
    expect(List.takeWhile((n) => n <= 3, [2, 3, 5, 8, 1, 0, 9])).toEqual([2, 3])
  })
})

describe('List.drop', () => {
  const input = [2, 3, 5, 8, 1, 0, 9]

  it.each<{ n: number; expected: number[] }>([
    { n: 2, expected: [5, 8, 1, 0, 9] },
    { n: 3, expected: [8, 1, 0, 9] },
    { n: 1, expected: [3, 5, 8, 1, 0, 9] },
    { n: 0, expected: [2, 3, 5, 8, 1, 0, 9] },
    { n: null as unknown as number, expected: [2, 3, 5, 8, 1, 0, 9] },
    { n: 4, expected: [1, 0, 9] },
  ])('drop($n) === $expected', ({ n, expected }) => {
    expect(List.drop(n, input)).toEqual(expected)
  })
})

describe('List.dropWhile', () => {
  it('drops leading items while the predicate holds', () => {
    expect(List.dropWhile((n) => n <= 3, [2, 3, 5, 8, 1, 0, 9])).toEqual([5, 8, 1, 0, 9])
  })
})

describe('List.zip', () => {
  it.each<{ xs: number[]; ys: number[]; expected: Array<[number, number]> }>([
    { xs: [], ys: [], expected: [] },
    {
      xs: [1, 2],
      ys: [4, 5],
      expected: [
        [1, 4],
        [2, 5],
      ],
    },
    {
      xs: [1, 2],
      ys: [4, 5, 6],
      expected: [
        [1, 4],
        [2, 5],
      ],
    },
    {
      xs: [1, 2, 3],
      ys: [4, 5],
      expected: [
        [1, 4],
        [2, 5],
      ],
    },
  ])('zip($xs, $ys) truncates to the shorter', ({ xs, ys, expected }) => {
    expect(List.zip(xs, ys)).toEqual(expected)
  })

  it('is curried', () => {
    expect(List.zip([1, 2, 3])([4, 5])).toEqual([
      [1, 4],
      [2, 5],
    ])
  })
})

describe('List.zipWith', () => {
  const sum = (a: number, b: number) => a + b

  it('combines two lists element-wise', () => {
    expect(List.zipWith(id, [], [])).toEqual([])
    expect(List.zipWith(sum, [1, 2, 3], [3, 2, 1])).toEqual([4, 4, 4])
  })

  it('is curried', () => {
    expect(List.zipWith(id)([], [])).toEqual([])
  })
})

describe('point-free (curried) predicate/accessor forms', () => {
  const isEven = (x: number) => x % 2 === 0

  it('any/all partially apply on the predicate', () => {
    expect(List.any(isEven)([1, 2, 3])).toBe(true)
    expect(List.any(isEven)([1, 3, 5])).toBe(false)
    expect(List.all(isEven)([2, 4, 6])).toBe(true)
    expect(List.all(isEven)([2, 4, 5])).toBe(false)
  })

  it('find/reject/takeWhile/partition partially apply', () => {
    expect(List.find(isEven)([1, 3, 4, 5])).toBe(4)
    expect(List.reject(isEven)([1, 2, 3, 4])).toEqual([1, 3])
    expect(List.takeWhile(isEven)([2, 4, 5, 6])).toEqual([2, 4])
    expect(List.partition(isEven)([1, 2, 3, 4])).toEqual([
      [2, 4],
      [1, 3],
    ])
  })

  it('accessor combinators partially apply', () => {
    expect(List.maximumBy((x: number) => x)([3, 1, 2])).toBe(3)
    expect(List.sortWith((a: number, b: number) => a - b)([3, 1, 2])).toEqual([1, 2, 3])
    expect(List.countBy(isEven)([1, 2, 3, 4])).toEqual({ true: 2, false: 2 })
  })
})
