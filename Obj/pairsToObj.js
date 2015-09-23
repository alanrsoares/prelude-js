"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (xs) {
  return xs.reduce(function (acc, x) {
    acc[x[0]] = x[1];
    return acc;
  }, {});
};

module.exports = exports["default"];