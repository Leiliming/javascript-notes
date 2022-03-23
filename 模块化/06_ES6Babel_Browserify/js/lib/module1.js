"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arr = void 0;
exports.bar = bar;
exports.foo = foo;

// 暴露模块 分别暴露
function foo() {
  console.log("foo() module1");
}

function bar(params) {
  console.log("bar() module1");
}

let arr = [1, 2, 3, 4, 5];
exports.arr = arr;