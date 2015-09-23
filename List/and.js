'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

exports['default'] = (0, _reduce2['default'])(function (acc, x) {
  return acc && !!x;
}, true);
module.exports = exports['default'];