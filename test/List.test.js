import { describe, expect, it } from 'bun:test'
import id from '../src/General/id.js'
import * as List from '../src/List/index.js'
import get from '../src/Obj/get.js'
import { Case, run } from './cases.js'

describe('List.js', () => {
  describe('List.range', () => {
    it('Should return a list of numbers according to the given boundaries', () => {
      expect(List.range(0)).toEqual([])
      expect(List.range(1)).toEqual([1])
      expect(List.range(3)).toEqual([1, 2, 3])
      expect(List.range(10, 8)).toEqual([8, 9, 10])
      expect(List.range(100, 50).length).toBe(51)
    })
  })

  describe('List.each', () => {
    it('Should apply a function to each item in a list, not returning any value', () => {
      const input = [1, 2, 3, 4, 5]
      const output = []
      const expected = [2, 3, 4, 5, 6]

      List.each((x) => output.push(++x), input)
      expect(output).toEqual(expected)
    })
  })

  describe('List.map', () => {
    it('Should apply a function to each item in a list, returning a new list with the result', () => {
      run(
        List.map,
        Case([(x) => ++x, [1, 2, 3, 4, 5]], [2, 3, 4, 5, 6]),
        Case([(x) => --x, [2, 3, 4, 5, 6]], [1, 2, 3, 4, 5]),
        Case([(x) => x * 2, [1, 2, 3, 4, 5]], [2, 4, 6, 8, 10]),
      )
    })
  })

  describe('List.compact', () => {
    it('Should return a list of truthy values in a list', () => {
      const input = [0, true, 1, 2, false, 4, 5]
      const expected = [true, 1, 2, 4, 5]

      expect(List.compact(input)).toEqual(expected)
    })
  })

  describe('List.filter', () => {
    it('Should return the values in a list that satisfy a given predicate', () => {
      const input = [0, 1, 2, 3, 4, 5]
      const expected = [4, 5]

      expect(List.filter((x) => x > 3, input)).toEqual(expected)
    })
  })

  describe('List.reject', () => {
    it("Should return the values in a list that doesn't satisfy the given predicate", () => {
      const input = [0, true, 1, 2, false, 4, 5]
      const expected = [0, false]

      expect(List.reject((x) => x, input)).toEqual(expected)
    })
  })

  describe('List.partition', () => {
    it('Should return a list with two lists containing the passed and failed values given a predicate', () => {
      const input = [0, true, 1, 2, false, 4, 5]

      expect(List.partition((x) => x, input)).toEqual([
        [true, 1, 2, 4, 5],
        [0, false],
      ])
    })
  })

  describe('List.find', () => {
    const input = [1, 2, 3, 4, 5]

    it('Should return the exact value in a list that satisfies a given predicate', () => {
      expect(List.find((x) => x === 4, input)).toBe(4)
    })
    it('Should return the first value in a list that satisfies an ambiguous predicate', () => {
      expect(List.find((x) => x > 2, input)).toBe(3)
    })
    it('Should return undefined when no value in a list satisfies a given predicate', () => {
      expect(List.find((x) => x === 12, input)).toBe(undefined)
    })
  })

  describe('List.elem', () => {
    it('Should tell whether a value is present in a list', () => {
      run(List.elem, Case([3, [1, 2, 3]], true), Case([4, [1, 2, 3]], false))
    })
  })

  describe('List.notElem', () => {
    it('Should tell whether a value is absent from a list', () => {
      run(List.notElem, Case([3, [1, 2, 3]], false), Case([4, [1, 2, 3]], true))
    })
  })

  describe('List.head', () => {
    const input = [1, 2, 3, 4, 5]

    it('Should return the first value in a list', () => {
      expect(List.head(input)).toBe(1)
    })
  })

  describe('List.first (alias => List.head)', () => {
    const input = [1, 2, 3, 4, 5]

    it('Should return the first value in a list', () => {
      expect(List.first(input)).toBe(1)
    })
  })

  describe('List.tail', () => {
    const input = [1, 2, 3, 4, 5]

    it('Should return all but the first value in a list', () => {
      expect(List.tail(input)).toEqual([2, 3, 4, 5])
    })
  })

  describe('List.last', () => {
    const input = [1, 2, 3, 4, 5]

    it('Should return the last value in a list', () => {
      expect(List.last(input)).toBe(5)
    })
  })

  describe('List.initial', () => {
    const input = [1, 2, 3, 4, 5]

    it('Should return all but the last value in a list', () => {
      expect(List.initial(input)).toEqual([1, 2, 3, 4])
    })
  })

  describe('List.empty', () => {
    it('Should return true for an empty list', () => {
      expect(List.empty([])).toBe(true)
    })
    it('Should return false for an non-empty list', () => {
      expect(List.empty([1, 2, 3])).toBe(false)
    })
  })

  describe('List.length', () => {
    it('Should return the number of items in a list', () => {
      run(List.length, Case([[]], 0), Case([[1, 2, 3]], 3))
    })
  })

  describe('List.reverse', () => {
    const input = [1, 2, 0, 5, 4, 3]

    it('Should return the items in a list in a reversed order', () => {
      expect(List.reverse(input)).toEqual([3, 4, 5, 0, 2, 1])
    })
  })

  describe('List.uniqueBy', () => {
    it('Should find the unique items in a list given a predicate', () => {
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
    it('Should find the unique items in a list', () => {
      const input = [1, 2, 3, 2, 2, 1, 3, 2, 0, 9]

      expect(List.unique(input)).toEqual([1, 2, 3, 0, 9])
    })
  })

  describe('List.foldl', () => {
    it('Should calculate the sum of items in a list', () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9]

      expect(List.foldl((x, y) => x + y, 0, input)).toBe(45)
      expect(List.fold((x, y) => x + y, 0, input)).toBe(45)
    })
  })

  describe('List.foldl1', () => {
    it('Should calculate the number of items in a list', () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

      expect(List.foldl1((x) => x + 1, input)).toBe(10)
      expect(List.fold1((x) => x + 1, input)).toBe(10)
    })
  })

  describe('List.foldr', () => {
    it('Should concatenate the letters with the initial value', () => {
      const input = ['h', 'e', 'l', 'l']

      expect(List.foldr((x, y) => x + y, 'o')(input)).toBe('hello')
    })
  })

  describe('List.foldr1', () => {
    it('Should calculate the number of items in a list', () => {
      const input = [1, 2, 3, 4, 9]

      expect(List.foldr1((x, y) => x - y, input)).toBe(7)
    })
  })

  describe('List.concat', () => {
    it('Should concatenate a list of lists into one list', () => {
      const input = [[1, 2], [3], [4, 5]]

      expect(List.concat(input)).toEqual([1, 2, 3, 4, 5])
    })
  })

  describe('List.concatMap', () => {
    it('Should concatenate a list of lists generated by a function, into one list', () => {
      const input = [1, 2, 3]

      expect(List.concatMap((x) => [`${x}`, x], input)).toEqual(['1', 1, '2', 2, '3', 3])
      expect(List.concatMap((x) => [x, x], input)).toEqual([1, 1, 2, 2, 3, 3])
    })
  })

  describe('List.flatten', () => {
    it('Should flatten a list', () => {
      const input = [1, [[2], 3], [4, [[5]]]]

      expect(List.flatten(input)).toEqual([1, 2, 3, 4, 5])
    })
  })

  describe('List.difference', () => {
    it('Should calculate the difference between lists', () => {
      expect(List.difference([1, 2, 3, 4], [1], [4])).toEqual([2, 3])
      expect(List.difference([1, 2, 3], [2, 1, 3], [3, 1, 2])).toEqual([])
      expect(List.difference([1, 2, 3], [101, 2, 1, 10], [2, 1], [-1, 0, 1, 2])).toEqual([3])
      expect(List.difference([1, 2, 3, 4, 5], [5, 2, 10], [9])).toEqual([1, 3, 4])
    })
  })

  describe('List.intersection', () => {
    it('Should calculate the intersection between lists', () => {
      expect(List.intersection([1, 2, 3], [2, 1, 3], [3, 1, 2])).toEqual([1, 2, 3])
      expect(List.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1], [-1, 0, 1, 2])).toEqual([1, 2])
      expect(List.intersection([2, 3], [9, 8], [12, 1], [99])).toEqual([])
    })
  })

  describe('List.union', () => {
    const cases = [
      { input: [[1, 2, 3, 4], [2, 4, 5], [9], []], expected: [1, 2, 3, 4, 5, 9] },
      { input: [[1, 5, 7], [3, 5], []], expected: [1, 5, 7, 3] },
    ]

    it('Should calculate the union between lists', () => {
      cases.forEach(({ input, expected }) => {
        expect(List.union(...input)).toEqual(expected)
      })
    })
  })

  describe('List.countBy', () => {
    const cases = [
      { input: [4.2, 4.4, 9.8], predicate: Math.floor, expected: { 4: 2, 9: 1 } },
      { input: ['foo', 'bar', 'burp'], predicate: get('length'), expected: { 3: 2, 4: 1 } },
      { input: [-3, 1, 2, 3, 4, 5], predicate: (x) => x > 2, expected: { true: 3, false: 3 } },
    ]

    it('Should count the occurences by a given predicate', () => {
      cases.forEach(({ input, predicate, expected }) => {
        expect(List.countBy(predicate, input)).toEqual(expected)
      })
    })
  })

  describe('List.groupBy', () => {
    it('Should group the matching results by a given predicate', () => {
      expect(List.groupBy(Math.floor, [4.2, 4.4, 9.8])).toEqual({ 4: [4.2, 4.4], 9: [9.8] })
      expect(List.groupBy(get('length'), ['one', 'two', 'three'])).toEqual({
        3: ['one', 'two'],
        5: ['three'],
      })
      expect(List.groupBy((x) => x > 2, [-3, 1, 2, 3, 4, 5])).toEqual({
        true: [3, 4, 5],
        false: [-3, 1, 2],
      })
    })
  })

  describe('List.and', () => {
    it('Should return false if any item in the list is false, otherwise returns true', () => {
      const neither = (xs, y) => List.and(xs.map((x) => x !== y))
      expect(neither([1, 2], 2)).toBe(false)
      expect(neither([1, 2], 3)).toBe(true)
      expect(List.and([1, 2, 3])).toBe(true)
      expect(List.and([3, 2, false])).toBe(false)
    })
  })

  describe('List.or', () => {
    it('Should return true if any item in the list is true, otherwise returns false', () => {
      const either = (xs, y) => List.or(xs.map((x) => x === y))
      expect(either([1, 2], 2)).toBe(true)
      expect(either([1, 2], 3)).toBe(false)
      expect(List.or([1, 2, 3])).toEqual(true)
      expect(List.or([0, '', null, false])).toBe(false)
    })
  })

  describe('List.any', () => {
    it('Should return true true on the first item that satisfies the predicate', () => {
      expect(List.any((x) => x > 2, [1, 2, 3])).toBe(true)
      expect(List.any((x) => x.length > 3, ['foo', 'bar', 'buzz'])).toEqual(true)
      expect(List.any((x) => x.length < 3, ['foo', 'bar', 'buzz'])).toEqual(false)
    })
  })

  describe('List.all', () => {
    it('Should return true true on the first item that does not satisfy the predicate', () => {
      expect(List.all((x) => x, [1, 2, 3])).toBe(false)
      expect(List.all((x) => x.length > 3, ['foo', 'bar', 'buzz'])).toBe(false)
    })
  })

  describe('List.sort', () => {
    it('Sorts a list without modifying the input.', () => {
      expect(List.sort([1, 3, 2])).toEqual([1, 2, 3])
      expect(List.sort([1, 3, 2, 0])).toEqual([0, 1, 2, 3])
    })
  })

  describe('List.sortWith', () => {
    it('Should sort a list with a custom binary predicate.', () => {
      const sorter = (x, y) => (x.length > y.length ? 1 : x.length < y.length ? -1 : 0)
      expect(List.sortWith(sorter, ['three', 'one', 'two'])).toEqual(['one', 'two', 'three'])
    })
  })

  describe('List.sortBy', () => {
    it('Should sort a list with a custom property-accessor predicate.', () => {
      expect(List.sortBy(get('length'), ['three', 'one', 'two'])).toEqual(['one', 'two', 'three'])
    })
  })

  describe('List.sum', () => {
    it('Should return the sum of a list of numbers.', () => {
      expect(List.sum([1, 2, 3, 4, 5])).toBe(15)
    })
  })

  describe('List.product', () => {
    it('Should return the product of all items in a list of numbers.', () => {
      expect(List.product([1, 2, 3])).toBe(6)
    })
  })

  describe('List.mean', () => {
    it('Should return the mean/average of all items in a list of numbers.', () => {
      expect(List.mean([1, 2, 3, 4, 5])).toBe(3)
    })
  })

  describe('List.maximum', () => {
    it('Should return the maximum value of all items in a list of comparables.', () => {
      expect(List.maximum([1, 2, 3, 4, 5])).toBe(5)
      expect(List.maximum([-1, -2, -3, -4, -5])).toBe(-1)
      expect(List.maximum(['1', '3', '2'])).toBe('3')
      expect(List.maximum(['a', 'c', 'b'])).toBe('c')
      expect(List.maximum(['w', 'c', 'b'])).toBe('w')
    })
  })

  describe('List.minimum', () => {
    it('Should return the minimum value of all items in a list of comparables.', () => {
      expect(List.minimum([1, 2, 3, 4, 5])).toBe(1)
      expect(List.minimum([-1, -2, -3, -4, -5])).toBe(-5)
      expect(List.minimum(['1', '3', '2'])).toBe('1')
      expect(List.minimum(['a', 'c', 'b'])).toBe('a')
      expect(List.minimum(['w', 'c', 'b'])).toBe('b')
    })
  })

  describe('List.maximumBy', () => {
    it('Should return the item with the maximum value resulting from applying a predicate.', () => {
      expect(List.maximumBy((x) => x, [1, 2, 3, 4, 5])).toBe(5)
      expect(List.maximumBy((x) => x, [-1, -2, -3, -4, -5])).toBe(-1)
      expect(List.maximumBy((x) => x, ['1', '3', '2'])).toBe('3')
      expect(List.maximumBy((x) => x, ['a', 'c', 'b'])).toBe('c')
      expect(List.maximumBy((x) => x, ['w', 'c', 'b'])).toBe('w')
    })
  })

  describe('List.minimumBy', () => {
    it('Should return the item with the minimum value resulting from applying a predicate.', () => {
      expect(List.minimumBy((x) => x, [1, 2, 3, 4, 5])).toBe(1)
      expect(List.minimumBy((x) => x, [-1, -2, -3, -4, -5])).toBe(-5)
      expect(List.minimumBy((x) => x, ['1', '3', '2'])).toBe('1')
      expect(List.minimumBy((x) => x, ['a', 'c', 'b'])).toBe('a')
      expect(List.minimumBy((x) => x, ['w', 'c', 'b'])).toBe('b')
      expect(List.minimumBy(get('length'), ['was', 'a', 'test'])).toBe('a')
    })
  })

  describe('List.scan', () => {
    it('Should return a list composed of the initial value, the intermediate values, and then the final value.', () => {
      const sum = (a, b) => a + b
      const mult = (a, b) => a * b

      expect(List.scan(sum, 0, [1, 2, 3])).toEqual([0, 1, 3, 6])
      expect(List.scan(mult, 1, [2, 3, 4])).toEqual([1, 2, 6, 24])
      expect(List.scanl(sum, 0, [1, 2, 3])).toEqual([0, 1, 3, 6])
      expect(List.scanl(mult, 1, [2, 3, 4])).toEqual([1, 2, 6, 24])
    })
  })

  describe('List.scan1', () => {
    it('Should return a list composed of the initial value, the intermediate values, and then the final value.', () => {
      const sum = (a, b) => a + b
      const mult = (a, b) => a * b

      expect(List.scan1(sum, [1, 2, 3])).toEqual([1, 3, 6])
      expect(List.scan1(mult, [1, 2, 3])).toEqual([1, 2, 6])
      expect(List.scan1(mult, [])).toEqual(undefined)
      expect(List.scanl1(sum, [1, 2, 3])).toEqual([1, 3, 6])
      expect(List.scanl1(mult, [1, 2, 3])).toEqual([1, 2, 6])
      expect(List.scanl1(mult, [])).toEqual(undefined)
    })
  })

  describe('List.take', () => {
    it('Should take the first n elements of a list', () => {
      const input = [2, 3, 5, 8, 1, 0, 9]

      expect(List.take(2, input)).toEqual([2, 3])
      expect(List.take(3, input)).toEqual([2, 3, 5])
      expect(List.take(1, input)).toEqual([2])
      expect(List.take(0, input)).toEqual([])
      expect(List.take(null, input)).toEqual([])
      expect(List.take(4, input)).toEqual([2, 3, 5, 8])
    })
  })

  describe('List.takeWhile', () => {
    it('Should take the first n elements that satisfy the given predicate', () => {
      const input = [2, 3, 5, 8, 1, 0, 9]

      expect(List.takeWhile((n) => n <= 3, input)).toEqual([2, 3])
    })
  })

  describe('List.drop', () => {
    it('Should drop the first n elements of a list', () => {
      const input = [2, 3, 5, 8, 1, 0, 9]

      expect(List.drop(2, input)).toEqual([5, 8, 1, 0, 9])
      expect(List.drop(3, input)).toEqual([8, 1, 0, 9])
      expect(List.drop(1, input)).toEqual([3, 5, 8, 1, 0, 9])
      expect(List.drop(0, input)).toEqual(input)
      expect(List.drop(null, input)).toEqual(input)
      expect(List.drop(4, input)).toEqual([1, 0, 9])
    })
  })

  describe('List.dropWhile', () => {
    it('Should drop the first n elements that satisfy the given predicate', () => {
      const input = [2, 3, 5, 8, 1, 0, 9]

      expect(List.dropWhile((n) => n <= 3, input)).toEqual([5, 8, 1, 0, 9])
    })
  })

  describe('List.zip', () => {
    it('Should zip together its two arguments into a list of lists. ', () => {
      run(
        List.zip,
        Case([[], []], []),
        Case(
          [
            [1, 2],
            [4, 5],
          ],
          [
            [1, 4],
            [2, 5],
          ],
        ),
        Case(
          [
            [1, 2],
            [4, 5, 6],
          ],
          [
            [1, 4],
            [2, 5],
          ],
        ),
        Case(
          [
            [1, 2, 3],
            [4, 5],
          ],
          [
            [1, 4],
            [2, 5],
          ],
        ),
      )
      expect(List.zip([1, 2, 3])([4, 5])).toEqual([
        [1, 4],
        [2, 5],
      ])
    })
  })

  describe('List.zipWith', () => {
    const sum = (a, b) => a + b

    it('Should zipWith together its two arguments into a list of lists. ', () => {
      run(List.zipWith, Case([id, [], []], []), Case([sum, [1, 2, 3], [3, 2, 1]], [4, 4, 4]))
      expect(List.zipWith(id)([], [])).toEqual([])
    })
  })
})
