// #region snippet
import compose from 'preludejs/Func/compose'
import curry from 'preludejs/Func/curry'

const add = curry((a: number, b: number) => a + b)
const double = (x: number) => x * 2

// Compose runs right-to-left (double after add(2))
const addThenDouble = compose(double, add(2))

export const result = addThenDouble(3) // => 10
//    ^?
// #endregion
