"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (xss) {
  return [].concat.apply([], xss);
};

module.exports = exports["default"];