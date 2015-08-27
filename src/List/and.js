import reduce from './reduce';

//+ and :: [a] -> Boolean
export default reduce((acc, x) => acc && !!x, true);
