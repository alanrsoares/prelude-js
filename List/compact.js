'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

var _GeneralId = require('../General/id');

var _GeneralId2 = _interopRequireDefault(_GeneralId);

exports['default'] = (0, _filter2['default'])(_GeneralId2['default']);
module.exports = exports['default'];