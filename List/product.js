"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (xs) {
  return xs.reduceRight(function (x, y) {
    return x * y;
  });
};

module.exports = exports["default"];