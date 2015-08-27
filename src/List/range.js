//+ range :: (Number, Number?, Number?) -> [Number]
export default (to, from = 1, step = 1) => {
  const result = [];
  for (let i = from; i <= to; i += step) {
    result.push(i);
  }
  return result;
};
