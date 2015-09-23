'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

exports['default'] = (0, _curry2['default'])(function (fn, args) {
  return fn.apply(null, args);
});
module.exports = exports['default'];