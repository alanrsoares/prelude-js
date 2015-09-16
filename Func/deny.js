//+ deny :: (a -> b) -> !(a -> b)
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !fn.apply(null, args);
  };
};

module.exports = exports["default"];
