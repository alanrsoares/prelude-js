'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ListInitial = require('../List/initial');

var _ListInitial2 = _interopRequireDefault(_ListInitial);

var _ListLast = require('../List/last');

var _ListLast2 = _interopRequireDefault(_ListLast);

exports['default'] = function () {
  for (var _len = arguments.length, fs = Array(_len), _key = 0; _key < _len; _key++) {
    fs[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return (0, _ListInitial2['default'])(fs).reduceRight(function (acc, f) {
      return f.call(undefined, acc);
    }, (0, _ListLast2['default'])(fs).apply(undefined, args));
  };
};

module.exports = exports['default'];