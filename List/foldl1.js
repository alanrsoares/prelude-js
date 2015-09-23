'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

var _fold = require('./fold');

var _fold2 = _interopRequireDefault(_fold);

var _head = require('./head');

var _head2 = _interopRequireDefault(_head);

var _tail = require('./tail');

var _tail2 = _interopRequireDefault(_tail);

exports['default'] = (0, _FuncCurry2['default'])(function (fn, xs) {
  return (0, _fold2['default'])(fn, (0, _head2['default'])(xs), (0, _tail2['default'])(xs));
});
module.exports = exports['default'];