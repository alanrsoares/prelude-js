import { curry, fix } from '../Func';
import { keys } from '../Obj';
import typeOf from './typeOf';

function areSimilar(a, b) {
  switch(typeOf(a)) {
    case 'Array':
      return a.length === b.length &&
        keys(a).reduce((acc, k) => acc && areSimilar((a.sort()[k]), (b.sort()[k])), true);
    case 'Object':
      return keys(a).length === keys(b).length &&
        keys(a).reduce((acc, k) => acc && areSimilar(a[k], b[k]), true);
    default:
      return a === b;
  }
};

//+ areSimilar :: a -> a -> Boolean
export default curry(areSimilar);
