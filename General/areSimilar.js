'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Func = require('../Func');

var _Obj = require('../Obj');

var _typeOf = require('./typeOf');

var _typeOf2 = _interopRequireDefault(_typeOf);

//+ areSimilar :: a -> a -> Boolean
exports['default'] = (0, _Func.fix)(function (areSimilar) {
  return (0, _Func.curry)(function (a, b) {
    if ((0, _typeOf2['default'])(a) !== (0, _typeOf2['default'])(b)) {
      return false;
    }

    switch ((0, _typeOf2['default'])(a)) {
      case 'Array':
        return a.length === b.length && (0, _Obj.keys)(a).reduce(function (acc, k) {
          return acc && areSimilar(a.sort()[k], b.sort()[k]);
        }, true);
      case 'Object':
        return (0, _Obj.keys)(a).length === (0, _Obj.keys)(b).length && (0, _Obj.keys)(a).reduce(function (acc, k) {
          return acc && areSimilar(a[k], b[k]);
        }, true);
      case 'Function':
        return a.toString() === b.toString();
      default:
        return a === b;
    }
  });
});
module.exports = exports['default'];
