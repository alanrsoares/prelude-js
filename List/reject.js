'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _FuncDeny = require('../Func/deny');

var _FuncDeny2 = _interopRequireDefault(_FuncDeny);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, xs) {
  return xs.filter((0, _FuncDeny2['default'])(fn));
});
module.exports = exports['default'];