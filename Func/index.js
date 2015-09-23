'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _apply = require('./apply');

var _apply2 = _interopRequireDefault(_apply);

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _deny = require('./deny');

var _deny2 = _interopRequireDefault(_deny);

var _fix = require('./fix');

var _fix2 = _interopRequireDefault(_fix);

var _flip = require('./flip');

var _flip2 = _interopRequireDefault(_flip);

var _memoize = require('./memoize');

var _memoize2 = _interopRequireDefault(_memoize);

exports['default'] = {
  apply: _apply2['default'],
  compose: _compose2['default'],
  curry: _curry2['default'],
  deny: _deny2['default'],
  fix: _fix2['default'],
  flip: _flip2['default'],
  memoize: _memoize2['default']
};
module.exports = exports['default'];