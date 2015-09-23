'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Func = require('../Func');

var _List = require('../List');

var replicate = (0, _Func.curry)(function (n, x) {
  return (0, _List.range)(n).map(function () {
    return x;
  });
});

exports.replicate = replicate;
exports['default'] = replicate;