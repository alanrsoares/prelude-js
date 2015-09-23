'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _GeneralOfType = require('../General/ofType');

var _GeneralOfType2 = _interopRequireDefault(_GeneralOfType);

var _concatMap = require('./concatMap');

var _concatMap2 = _interopRequireDefault(_concatMap);

var flatten = function flatten(ys) {
  return (0, _concatMap2['default'])(function (xs) {
    return (0, _GeneralOfType2['default'])('Array', xs) ? flatten(xs) : xs;
  }, ys);
};

exports['default'] = flatten;
module.exports = exports['default'];