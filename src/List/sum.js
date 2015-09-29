import add from '../Num/add';

//+ sum :: [Number] -> Number
export default (xs) => xs.reduceRight(add);
