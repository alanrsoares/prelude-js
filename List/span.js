'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _takeWhile = require('./takeWhile');

var _takeWhile2 = _interopRequireDefault(_takeWhile);

var _dropWhile = require('./dropWhile');

var _dropWhile2 = _interopRequireDefault(_dropWhile);

exports['default'] = (0, _FuncCurry2['default'])(function (f, xs) {
  return [(0, _takeWhile2['default'])(f, xs), (0, _dropWhile2['default'])(f, xs)];
});
module.exports = exports['default'];