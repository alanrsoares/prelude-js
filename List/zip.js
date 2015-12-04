'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

exports['default'] = (0, _FuncCurry2['default'])(function (xs, ys) {
  return xs.reduce(function (acc, x, i) {
    return i === ys.length ? acc : acc.concat([[x, ys[i]]]);
  }, []);
});
module.exports = exports['default'];