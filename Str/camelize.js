"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (x) {
  return x.replace(/-(\w)/g, function (m) {
    return m[1].toUpperCase();
  });
};

module.exports = exports["default"];