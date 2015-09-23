'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Func = require('../Func');

var _typeOf = require('./typeOf');

var _typeOf2 = _interopRequireDefault(_typeOf);

var _equals = require('./equals');

var _equals2 = _interopRequireDefault(_equals);

exports['default'] = (0, _Func.curry)(function (type, x) {
  return (0, _Func.compose)((0, _equals2['default'])(type), _typeOf2['default'])(x);
});
module.exports = exports['default'];