"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (x) {
    return ({}).toString.call(x).match(/\[object (\w+)\]/)[1];
};

module.exports = exports["default"];