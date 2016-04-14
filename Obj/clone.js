'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCompose = require('../Func/compose');

var _FuncCompose2 = _interopRequireDefault(_FuncCompose);

exports['default'] = function (x) {
  return JSON.parse(JSON.stringify(x));
};

module.exports = exports['default'];