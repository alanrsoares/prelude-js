import zipAllWith from './zipAllWith.js'

// + zipAll :: [a] -> [b] -> [[a, b]]
export default (xs, ys) => zipAllWith((x, y) => [x, y], xs, ys)
