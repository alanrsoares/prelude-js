//+ compose :: ((y → z), (x → y), …, (o → p), ((a, b, …, n) → o)) → (a → b → … → n → z)
export default (...fns) =>
  (...args) =>
    fns.reduceRight((acc, fn) => [fn(...acc)], args)[0];
