"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

exports["default"] = function () {
  for (var _len = arguments.length, fs = Array(_len), _key = 0; _key < _len; _key++) {
    fs[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return (function (_ref) {
      var _ref2 = _toArray(_ref);

      var g = _ref2[0];

      var gs = _ref2.slice(1);

      return gs.reduce(function (acc, h) {
        return h(acc);
      }, g.apply(undefined, args));
    })(fs.reverse());
  };
};

module.exports = exports["default"];