'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _foldr = require('./foldr');

var _foldr2 = _interopRequireDefault(_foldr);

var _last = require('./last');

var _last2 = _interopRequireDefault(_last);

var _initial = require('./initial');

var _initial2 = _interopRequireDefault(_initial);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, xs) {
  return (0, _foldr2['default'])(fn, (0, _last2['default'])(xs), (0, _initial2['default'])(xs));
});
module.exports = exports['default'];