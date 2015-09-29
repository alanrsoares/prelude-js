"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (fn) {
  return function () {
    return !fn.apply(undefined, arguments);
  };
};

module.exports = exports["default"];