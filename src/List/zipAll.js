// + zipAll :: [a] -> [b] -> [[a, b]]
import zipAllWith from './zipAllWith.js'

export default (xs, ys) => zipAllWith((x, y) => [x, y], xs, ys)
