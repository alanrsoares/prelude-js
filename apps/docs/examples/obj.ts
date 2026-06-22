// #region snippet
import get from 'preludejs/Obj/get'
import merge from 'preludejs/Obj/merge'

const user = { name: 'ada', role: 'admin' }

// get is key-first and curried
export const role = get('role', user) // => "admin"
//    ^?

// merge — later sources win
export const owner = merge(user, { role: 'owner' }) // => { name: "ada", role: "owner" }
//    ^?
// #endregion
