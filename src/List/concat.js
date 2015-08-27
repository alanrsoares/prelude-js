//+ concat :: [[a]] -> [a]
export default (xss) => [].concat.apply([], xss);
