"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (f) {
  return (function (g) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return f(g(g)).apply(null, args);
    };
  })(function (g) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return f(g(g)).apply(null, args);
    };
  });
};

module.exports = exports["default"];