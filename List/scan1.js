'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _scan = require('./scan');

var _scan2 = _interopRequireDefault(_scan);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, _ref) {
  var _ref2 = _toArray(_ref);

  var head = _ref2[0];

  var tail = _ref2.slice(1);

  return tail && (0, _scan2['default'])(fn, head, tail);
});
module.exports = exports['default'];
