(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _module = require("./module1");

var _module2 = require("./module2");

var _module3 = _interopRequireDefault(require("./module3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入其他的模块
//语法：import xxx from '路径'
//分别暴露  相当于在当前页面生命两个变量
//统一暴露 相当于在当前页面生命两个变量
//分别暴露 统一暴露 ==> 常规暴露
console.log(_module.foo, _module.bar, _module2.fun, _module2.fun2);
(0, _module3.default)();
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// 默认暴露 可以暴露任意数据类型，暴露生命数据接收到的就是什么数据
// export default value;
var _default = () => {
  console.log("我是默认暴露");
};

exports.default = _default;
},{}]},{},[1]);
