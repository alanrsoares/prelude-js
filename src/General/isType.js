import { curry } from '../Func';

//:: (String, a) -> Boolean
export const isType = curry((type, x) =>
  ({}).toString.call(x).match(/^\[object (\w+)\]$/)[1] === type);

export default isType;
