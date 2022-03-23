"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fun = fun;
exports.fun2 = fun2;

//统一暴露
function fun() {
  console.log("fun() module2");
}

function fun2() {
  console.log("fun2() module2");
}