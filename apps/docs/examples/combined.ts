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
  (us: User[]) => map((u: User) => capitalize(get('name', u)), us),
  (us: User[]) => sortBy((u: User) => -u.age, us),
  (us: User[]) => filter((u: User) => u.age >= 18, us),
)

export const adults = summarize(users) // => ["Ada", "Grace"]
//    ^?
// #endregion
