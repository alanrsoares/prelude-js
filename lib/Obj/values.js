import keys from './keys';

//:: {a: b} -> [b]
export default Object.values || ((x) => keys(x).map((k) => x[k]));
