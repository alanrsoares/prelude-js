'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _ListRange = require('../List/range');

var _ListRange2 = _interopRequireDefault(_ListRange);

var replicate = (0, _FuncCurry2['default'])(function (n, x) {
  return (0, _ListRange2['default'])(n).map(function () {
    return x;
  });
});

exports.replicate = replicate;
exports['default'] = replicate;