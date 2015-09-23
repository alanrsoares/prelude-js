'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _FuncFix = require('../Func/fix');

var _FuncFix2 = _interopRequireDefault(_FuncFix);

exports['default'] = (0, _FuncFix2['default'])(function (find) {
  return (0, _FuncCurry2['default'])(function (fn, _ref) {
    var _ref2 = _toArray(_ref);

    var x = _ref2[0];

    var xs = _ref2.slice(1);

    return x ? fn(x) ? x : find(fn, xs) : undefined;
  });
});
module.exports = exports['default'];