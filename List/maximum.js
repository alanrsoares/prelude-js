'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _foldr = require('./foldr');

//+ maximun :: [Number] -> Number

var _foldr2 = _interopRequireDefault(_foldr);

exports['default'] = (0, _foldr2['default'])(function (acc, x) {
  return x !== null && x > acc ? x : acc;
}, null);
module.exports = exports['default'];
