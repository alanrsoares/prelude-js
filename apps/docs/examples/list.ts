// #region snippet
import compose from 'preludejs/Func/compose'
import filter from 'preludejs/List/filter'
import map from 'preludejs/List/map'

const isEven = (x: number) => x % 2 === 0
const double = (x: number) => x * 2

// Chain filter then map with right-to-left compose — point-free
const doubleEvens = compose(map(double), filter(isEven))

export const result = doubleEvens([1, 2, 3, 4]) // => [4, 8]
//    ^?
// #endregion
