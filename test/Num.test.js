import { describe, expect, it } from 'bun:test'
import * as Num from '../src/Num/index.js'

describe('Num.js', () => {
  describe('Num.add', () => {
    it('Should add two values', () => {
      expect(Num.add(1, 2)).toBe(3)
      expect(Num.add(-1, 2)).toBe(1)
      expect(Num.add('foo', 2)).toBe('foo2')
      expect(Num.add('foo', 'bar')).toBe('foobar')
      expect(Num.add(null, undefined)).toBeNaN()
      expect(Num.add(null, null)).toBe(0)
      expect(Num.add(undefined, undefined)).toBeNaN()
    })
  })
})
