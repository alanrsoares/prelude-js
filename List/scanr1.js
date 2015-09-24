'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _scanr = require('./scanr');

var _scanr2 = _interopRequireDefault(_scanr);

var _last = require('./last');

var _last2 = _interopRequireDefault(_last);

var _initial = require('./initial');

var _initial2 = _interopRequireDefault(_initial);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, xs) {
  return !xs.length ? undefined : (0, _scanr2['default'])(fn, (0, _last2['default'])(xs), (0, _initial2['default'])(xs));
});
module.exports = exports['default'];