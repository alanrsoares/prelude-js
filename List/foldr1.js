'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _foldr = require('./foldr');

var _foldr2 = _interopRequireDefault(_foldr);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, xs) {
  return (0, _foldr2['default'])(fn, 0, xs);
});
module.exports = exports['default'];