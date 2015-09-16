//+ sum :: [Number] -> Number
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (xs) {
  return xs.reduce(function (x, y) {
    return x + y;
  }, 0);
};

module.exports = exports["default"];
