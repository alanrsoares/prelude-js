'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _ListTake = require('../List/take');

var _ListTake2 = _interopRequireDefault(_ListTake);

exports['default'] = (0, _FuncCurry2['default'])(function (n, x) {
  return x && (0, _ListTake2['default'])(n, x.split('')).join('');
});
module.exports = exports['default'];