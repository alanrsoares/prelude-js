"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (to) {
  var from = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
  var step = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  var result = [];
  for (var i = from; i <= to; i += step) {
    result.push(i);
  }
  return result;
};

module.exports = exports["default"];