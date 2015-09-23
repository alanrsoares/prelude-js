"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (xs) {
  return !xs.length ? undefined : xs.slice(0, -1);
};

module.exports = exports["default"];