'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _sum = require('./sum');

var _sum2 = _interopRequireDefault(_sum);

exports['default'] = function (xs) {
  return (0, _sum2['default'])(xs) / xs.length;
};

module.exports = exports['default'];