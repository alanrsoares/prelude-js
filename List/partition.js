'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, xs) {
  var passed = [];
  var failed = [];
  xs.forEach(function (x) {
    return (fn(x) ? passed : failed).push(x);
  });
  return [passed, failed];
});
module.exports = exports['default'];