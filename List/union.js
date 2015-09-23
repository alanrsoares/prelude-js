'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _unique = require('./unique');

var _unique2 = _interopRequireDefault(_unique);

var _flatten = require('./flatten');

var _flatten2 = _interopRequireDefault(_flatten);

exports['default'] = function (xs) {
  for (var _len = arguments.length, yss = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    yss[_key - 1] = arguments[_key];
  }

  return (0, _unique2['default'])(xs.concat((0, _flatten2['default'])(yss)));
};

module.exports = exports['default'];