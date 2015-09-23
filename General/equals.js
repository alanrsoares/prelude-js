'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Func = require('../Func');

exports['default'] = (0, _Func.curry)(function (a, b) {
  return a === b;
});
module.exports = exports['default'];