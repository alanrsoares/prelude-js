//+ compose :: ((y → z), (x → y), …, (o → p), ((a, b, …, n) → o)) → (a → b → … → n → z)
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fns.reduceRight(function (acc, fn) {
      return [fn.apply(undefined, acc)];
    }, args)[0];
  };
};

module.exports = exports["default"];