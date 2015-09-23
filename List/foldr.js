'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, acc, xs) {
  for (var i = xs.length - 1; i >= 0; i--) {
    acc = fn(xs[i], acc);
  }
  return acc;
});
module.exports = exports['default'];