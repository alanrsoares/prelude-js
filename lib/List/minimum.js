import foldr from './foldr';

//+ minimum :: [Number] -> Number
export default foldr((acc, x) => x !== null && x < acc ? x : acc, null);
