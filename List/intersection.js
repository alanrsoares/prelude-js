'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _find = require('./find');

var _find2 = _interopRequireDefault(_find);

exports['default'] = function (xs) {
  for (var _len = arguments.length, yss = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    yss[_key - 1] = arguments[_key];
  }

  return xs.filter(function (x) {
    return yss.some((0, _find2['default'])(function (y) {
      return y === x;
    }));
  });
};

module.exports = exports['default'];