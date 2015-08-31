import { curry, fix } from '../Func';
import { keys } from '../Obj';
import typeOf from './typeOf';

//+ areSimilar :: a -> a -> Boolean
export default fix((areSimilar) => curry((a, b) => {
  switch (typeOf(a)) {
    case 'Array':
      return a.length === b.length &&
        keys(a).reduce((acc, k) => acc && areSimilar((a.sort()[k]), (b.sort()[k])), true);
    case 'Object':
      return keys(a).length === keys(b).length &&
        keys(a).reduce((acc, k) => acc && areSimilar(a[k], b[k]), true);
    case 'Function':
      return a.toString() === b.toString();
    default:
      return a === b;
  }
}));
