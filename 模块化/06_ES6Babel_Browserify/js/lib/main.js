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