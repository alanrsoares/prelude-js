import { expect } from 'bun:test'
import curry from '../src/Func/curry.js'

const deep = (actual, expected) => expect(actual).toEqual(expected)

const runCase = curry((f, { input, expected, comparison }) => comparison(f(...input), expected))

export const Case = (input, expected, comparison = deep) => ({ input, expected, comparison })

export const run = (f, ...cases) => cases.map(runCase(f))
