import foldr from './foldr';

//+ maximun :: [Number] -> Number
export default foldr((acc, x) => x !== null && x > acc ? x : acc, null);
