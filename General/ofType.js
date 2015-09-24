'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _typeOf = require('./typeOf');

var _typeOf2 = _interopRequireDefault(_typeOf);

var _equals = require('./equals');

var _equals2 = _interopRequireDefault(_equals);

exports['default'] = (0, _FuncCurry2['default'])(function (type, x) {
  return (0, _equals2['default'])(type, (0, _typeOf2['default'])(x));
});
module.exports = exports['default'];