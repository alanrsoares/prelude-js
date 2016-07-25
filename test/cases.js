import { expect } from 'chai'
import { curry } from '../src/Func'

const deep = (actual, expected) => expect(actual).to.deep.equal(expected)

const runCase = curry((f, { input, expected, comparison }) => comparison(f(...input), expected))

export const Case = (input, expected, comparison = deep) => ({ input, expected, comparison })

export const run = (f, ...cases) => cases.map(runCase(f))
