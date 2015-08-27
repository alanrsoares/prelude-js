import reduce from './reduce';

//+ or :: [a] -> Boolean
export default reduce((acc, x) => acc || !!x, false);
