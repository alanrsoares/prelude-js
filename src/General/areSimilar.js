import curry from '../Func/curry';
import { keys } from '../Obj';

//+ areSimilar :: a -> a -> Boolean
export default curry((a, b) => {
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
});
