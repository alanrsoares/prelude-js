'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _ListScan = require('../List/scan');

var _ListScan2 = _interopRequireDefault(_ListScan);

var _ListReverse = require('../List/reverse');

var _ListReverse2 = _interopRequireDefault(_ListReverse);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, init, xs) {
  return (0, _ListReverse2['default'])((0, _ListScan2['default'])(fn, init, (0, _ListReverse2['default'])(xs)));
});
module.exports = exports['default'];