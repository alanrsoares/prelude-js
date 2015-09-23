"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

exports["default"] = function (fn) {
  var _this = this;

  var c = function c(fnArgs) {
    if (fnArgs.length >= fn.length) {
      return fn.apply(_this, fnArgs);
    }
    return function () {
      for (var _len2 = arguments.length, cArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        cArgs[_key2] = arguments[_key2];
      }

      return c([].concat(_toConsumableArray(fnArgs), cArgs));
    };
  };

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return c(args);
};

module.exports = exports["default"];