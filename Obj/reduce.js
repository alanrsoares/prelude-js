'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _keys = require('./keys');

var _keys2 = _interopRequireDefault(_keys);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, initial, x) {
  return (0, _keys2['default'])(x).reduce(function (acc, k, i) {
    return fn(acc, k, x[k], i, x);
  }, initial);
});
module.exports = exports['default'];