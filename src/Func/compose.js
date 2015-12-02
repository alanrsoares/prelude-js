//+ compose :: (b -> c) -> (a -> b) -> a -> c
export default (...fs) =>
  (v, ...args) =>
    fs.reduceRight((g, f) => f(g, ...args), v);
