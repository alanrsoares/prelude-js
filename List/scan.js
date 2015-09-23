'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _ListLast = require('../List/last');

var _ListLast2 = _interopRequireDefault(_ListLast);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, init, xs) {
  return xs.reduce(function (acc, x) {
    return acc.concat(fn((0, _ListLast2['default'])(acc), x));
  }, [init]);
});
module.exports = exports['default'];