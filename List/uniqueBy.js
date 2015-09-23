'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _ObjMerge = require('../Obj/merge');

var _ObjMerge2 = _interopRequireDefault(_ObjMerge);

var _ObjValues = require('../Obj/values');

var _ObjValues2 = _interopRequireDefault(_ObjValues);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, xs) {
  var reducer = function reducer(acc, x) {
    return (0, _ObjMerge2['default'])(acc, _defineProperty({}, 'K_' + x, x));
  };
  return (0, _ObjValues2['default'])(xs.map(fn).reduce(reducer, {}));
});
module.exports = exports['default'];