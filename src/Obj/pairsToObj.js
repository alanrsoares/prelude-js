//+ pairsToObj :: [[a, b]] -> {a: b}
export default (xs) =>
  xs.reduce((memo, x) => {
    memo[x[0]] = x[1];
    return memo;
  }, {});
