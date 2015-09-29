'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (fn) {
  var memo = {};
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var key = args.map(function (arg) {
      return arg + typeof arg;
    }).join('');
    return key in memo ? memo[key] : memo[key] = fn.apply(undefined, args);
  };
};

module.exports = exports['default'];