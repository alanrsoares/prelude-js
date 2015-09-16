'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _foldr = require('./foldr');

var _foldr2 = _interopRequireDefault(_foldr);

//+ maximun :: [Number] -> Number
exports['default'] = (0, _foldr2['default'])(function (acc, x) {
  return x !== null && x > acc ? x : acc;
}, null);
module.exports = exports['default'];
