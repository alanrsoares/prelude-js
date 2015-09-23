'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _areSimilar = require('./areSimilar');

var _areSimilar2 = _interopRequireDefault(_areSimilar);

var _deny = require('./deny');

var _deny2 = _interopRequireDefault(_deny);

var _equals = require('./equals');

var _equals2 = _interopRequireDefault(_equals);

var _id = require('./id');

var _id2 = _interopRequireDefault(_id);

var _ofType = require('./ofType');

var _ofType2 = _interopRequireDefault(_ofType);

var _replicate = require('./replicate');

var _replicate2 = _interopRequireDefault(_replicate);

var _typeOf = require('./typeOf');

var _typeOf2 = _interopRequireDefault(_typeOf);

exports['default'] = {
  areSimilar: _areSimilar2['default'],
  deny: _deny2['default'],
  equals: _equals2['default'],
  id: _id2['default'],
  ofType: _ofType2['default'],
  replicate: _replicate2['default'],
  typeOf: _typeOf2['default']
};
module.exports = exports['default'];