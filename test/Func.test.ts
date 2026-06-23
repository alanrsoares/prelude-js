import { describe, expect, it } from 'bun:test'
import * as Func from '../src/Func/index.js'

describe('Func.js', () => {
  describe('Func.curry', () => {
    it('Should allow partial application of a function', () => {
      const sum = Func.curry((a: number, b: number) => a + b)
      const increment = sum(1)
      expect(sum(1, 2)).toBe(3)
      expect(sum(3)(2)).toBe(5)
      expect(increment(1)).toBe(2)
    })
  })

  describe('Func.apply', () => {
    it('Should return the application of the supplied list as arguments to the supplied function', () => {
      const sum = Func.curry((a: number, b: number) => a + b)
      const sumAll = (...xs: number[]) => xs.reduce(sum)
      expect(Func.apply(sum, [2, 3])).toBe(5)
      expect(Func.apply(sumAll, [1, 2, 3, 4, 5])).toBe(15)
    })
  })

  describe('Func.fix', () => {
    it('Should run a recursive-ready inline function', () => {
      const fiftyFive = Func.fix(
        (fib: (n: number) => number) => (n: number) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2)),
      )(9)
      expect(fiftyFive).toBe(55)
    })
  })

  describe('Func.flip', () => {
    it('Should return a function with the arguments flipped', () => {
      const subtract = (a: number, b: number) => a - b
      const invertedSubtract = Func.flip(subtract)
      const invertedPower = Func.flip(Math.pow)
      expect(subtract(2, 5)).toBe(-3)
      expect(invertedSubtract(2, 5)).toBe(3)
      expect(invertedPower(2, 5)).toBe(25)
    })
  })

  describe('Func.memoize', () => {
    it('Should call a memoized function only once', () => {
      let called = 0
      const length = (x: string) => ++called && x.length
      const memoLength = Func.memoize(length)
      const cases = ['foo', 'bar', 'baz', 'buzz']

      cases.forEach((word, k) => {
        for (let i = 0; i <= k; i++) {
          memoLength(word)
        }
      })

      expect(called).toBe(cases.length)
    })
  })

  describe('Func.compose', () => {
    it('Should compose multiple functions into one', () => {
      const plus1 = (x: number) => x + 1
      const negate = (x: number) => -x
      const complex = Func.compose(plus1, negate, Math.pow)

      expect(complex(3, 2)).toBe(plus1(negate(Math.pow(3, 2))))
    })
  })

  describe('Func.deny', () => {
    it('Should deny the result of a function', () => {
      const gt2 = (x: number) => x > 2
      const twoOrLess = Func.deny(gt2)
      expect(gt2(2)).toBe(false)
      expect(twoOrLess(2)).toBe(true)
    })
  })

  describe('Func.const', () => {
    const keepHello = Func.const('hello')

    it.each([
      { ignored: 'ignored' },
      { ignored: 'still ignored' },
    ])('keeps its value regardless of $ignored', ({ ignored }) => {
      expect(keepHello(ignored)).toBe('hello')
    })

    it.each([
      { kept: 'hello', ignored: 'world' },
      { kept: 0, ignored: 999 },
    ])('const($kept, $ignored) === $kept', ({ kept, ignored }) => {
      expect(Func.const(kept, ignored)).toBe(kept)
    })
  })

  describe('Func.uncurry', () => {
    it('applies an array of arguments to a function', () => {
      const sum = Func.curry((a: number, b: number) => a + b)

      expect(Func.uncurry(sum, [2, 3])).toBe(5)
      expect(Func.uncurry(Math.max, [1, 7, 3])).toBe(7)
    })
  })
})
