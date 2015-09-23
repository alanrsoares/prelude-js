'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCompose = require('../Func/compose');

var _FuncCompose2 = _interopRequireDefault(_FuncCompose);

exports['default'] = (0, _FuncCompose2['default'])(JSON.parse, JSON.stringify);
module.exports = exports['default'];