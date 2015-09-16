//+ product :: [Number] -> Number
export default (xs) => xs.reduceRight((x, y) => x * y);
