'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _concat = require('./concat');

var _concat2 = _interopRequireDefault(_concat);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, xs) {
  return (0, _concat2['default'])((0, _map2['default'])(fn, xs));
});
module.exports = exports['default'];