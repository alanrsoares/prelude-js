import curry from '../Func/curry';
import fix from '../Func/fix';
import keys from '../Obj/keys';
import get from '../Obj/get';
import typeOf from './typeOf';
import equals from './equals';

//+ areSimilar :: a -> a -> Boolean
export default fix((areSimilar) => curry((a, b) => {
  if (!equals(...[a, b].map(typeOf))) {
    return false;
  }

  switch (typeOf(a)) {
    case 'Array':
      return equals(...[a, b].map(get('length'))) &&
        keys(a).reduce((acc, k) => acc && areSimilar((a[k]), (b[k])), true);
    case 'Object':
      return equals(...[a, b].map(keys).map(get('length'))) &&
        keys(a).reduce((acc, k) => acc && areSimilar(a[k], b[k]), true);
    case 'Function':
      return equals(a.toString(), b.toString());
    default:
      return equals(a, b);
  }
}));
