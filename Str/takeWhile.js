'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _ListTakeWhile = require('../List/takeWhile');

var _ListTakeWhile2 = _interopRequireDefault(_ListTakeWhile);

exports['default'] = (0, _FuncCurry2['default'])(function (f, x) {
  return x && (0, _ListTakeWhile2['default'])(f, x.split('')).join('');
});
module.exports = exports['default'];