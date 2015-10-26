'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

exports['default'] = (0, _FuncCurry2['default'])(function (p, s) {
  if (p === undefined) p = '';
  return p.substring(0, p.length - (s || '').toString().length) + (s || '');
});
module.exports = exports['default'];