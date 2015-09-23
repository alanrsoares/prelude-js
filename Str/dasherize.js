"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (x) {
  return x.replace(/[A-Z]/g, function (m) {
    return "-" + m.toLowerCase();
  });
};

module.exports = exports["default"];