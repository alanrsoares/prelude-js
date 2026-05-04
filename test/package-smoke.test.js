import { describe, expect, it } from 'bun:test'

import Prelude, { List as RootList } from 'preludejs'
import List from 'preludejs/List'
import map from 'preludejs/List/map'

describe('package exports', () => {
  it('resolves the root package entry as native ESM', () => {
    expect(typeof Prelude).toBe('object')
    expect(Prelude.List.range(3)).toEqual([1, 2, 3])
  })

  it('resolves named exports from the root package entry', () => {
    expect(RootList.sum([1, 2, 3])).toBe(6)
  })

  it('resolves module subpath exports', () => {
    expect(List.take(2, [1, 2, 3])).toEqual([1, 2])
  })

  it('resolves deep function subpath exports', () => {
    expect(map((x) => x * 2, [1, 2, 3])).toEqual([2, 4, 6])
  })
})
