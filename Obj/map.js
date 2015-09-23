'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _keys = require('./keys');

var _keys2 = _interopRequireDefault(_keys);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, x) {
  return (0, _keys2['default'])(x).map(function (k, i) {
    return fn(k, x[k], i);
  });
});
module.exports = exports['default'];