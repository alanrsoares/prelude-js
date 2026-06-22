// #region snippet
import camelize from 'preludejs/Str/camelize'
import words from 'preludejs/Str/words'

export const camel = camelize('prelude-js-library') // => "preludeJsLibrary"
//    ^?

export const list = words('hello functional world') // => ["hello", "functional", "world"]
//    ^?
// #endregion
