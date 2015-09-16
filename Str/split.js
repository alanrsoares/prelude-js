'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

//+ split :: String -> String -> String[]
exports['default'] = (0, _FuncCurry2['default'])(function (sep, str) {
  return str.split(sep);
});
module.exports = exports['default'];
