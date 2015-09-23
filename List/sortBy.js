'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, xs) {
  return xs.concat().sort(function (x, y) {
    return fn(x) > fn(y) ? 1 : fn(x) < fn(y) ? -1 : 0;
  });
});
module.exports = exports['default'];