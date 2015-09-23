'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _keys = require('./keys');

var _keys2 = _interopRequireDefault(_keys);

exports['default'] = Object.values || function (x) {
  return (0, _keys2['default'])(x).map(function (k) {
    return x[k];
  });
};

module.exports = exports['default'];