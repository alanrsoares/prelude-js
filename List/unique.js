'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _uniqueBy = require('./uniqueBy');

var _uniqueBy2 = _interopRequireDefault(_uniqueBy);

var _GeneralId = require('../General/id');

var _GeneralId2 = _interopRequireDefault(_GeneralId);

exports['default'] = function (xs) {
  return (0, _uniqueBy2['default'])(_GeneralId2['default'], xs);
};

module.exports = exports['default'];