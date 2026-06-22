// #region snippet
import compose from 'preludejs/Func/compose'
import filter from 'preludejs/List/filter'
import map from 'preludejs/List/map'
import sortBy from 'preludejs/List/sortBy'
import get from 'preludejs/Obj/get'
import capitalize from 'preludejs/Str/capitalize'

type User = { name: string; age: number }

const users: User[] = [
  { name: 'ada', age: 36 },
  { name: 'linus', age: 12 },
  { name: 'grace', age: 31 },
]

// adults only, oldest first, names capitalized — composed right-to-left
const summarize = compose(
  map((u: User) => capitalize(get('name', u))),
  sortBy((u: User) => -u.age),
  filter((u: User) => u.age >= 18),
)

export const adults = summarize(users) // => ["Ada", "Grace"]
//    ^?
// #endregion
