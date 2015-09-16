//+ pairsToObj :: [[a, b]] -> {a: b}
export default (xs) =>
  xs.reduce((acc, x) => {
    acc[x[0]] = x[1];
    return acc;
  }, {});
