'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

exports['default'] = Object.assign || function (y) {
  for (var _len = arguments.length, xs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    xs[_key - 1] = arguments[_key];
  }

  return xs.reduce(function (z, x) {
    return (0, _reduce2['default'])(function (acc, key, value) {
      acc[key] = value;
      return acc;
    }, z, x);
  }, y);
};

module.exports = exports['default'];