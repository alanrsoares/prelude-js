'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _FuncFix = require('../Func/fix');

var _FuncFix2 = _interopRequireDefault(_FuncFix);

var _ObjKeys = require('../Obj/keys');

var _ObjKeys2 = _interopRequireDefault(_ObjKeys);

var _ObjGet = require('../Obj/get');

var _ObjGet2 = _interopRequireDefault(_ObjGet);

var _typeOf = require('./typeOf');

var _typeOf2 = _interopRequireDefault(_typeOf);

var _equals = require('./equals');

var _equals2 = _interopRequireDefault(_equals);

exports['default'] = (0, _FuncFix2['default'])(function (areSimilar) {
  return (0, _FuncCurry2['default'])(function (a, b) {
    if (!_equals2['default'].apply(undefined, _toConsumableArray([a, b].map(_typeOf2['default'])))) {
      return false;
    }

    switch ((0, _typeOf2['default'])(a)) {
      case 'Array':
        return _equals2['default'].apply(undefined, _toConsumableArray([a, b].map((0, _ObjGet2['default'])('length')))) && (0, _ObjKeys2['default'])(a).reduce(function (acc, k) {
          return acc && areSimilar(a[k], b[k]);
        }, true);
      case 'Object':
        return _equals2['default'].apply(undefined, _toConsumableArray([a, b].map(_ObjKeys2['default']).map((0, _ObjGet2['default'])('length')))) && (0, _ObjKeys2['default'])(a).reduce(function (acc, k) {
          return acc && areSimilar(a[k], b[k]);
        }, true);
      case 'Function':
        return (0, _equals2['default'])(a.toString(), b.toString());
      default:
        return (0, _equals2['default'])(a, b);
    }
  });
});
module.exports = exports['default'];