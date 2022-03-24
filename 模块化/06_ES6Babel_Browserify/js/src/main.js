// 引入其他的模块

//语法：import xxx from '路径'
import $ from "jquery";

import { foo, bar } from "./module1"; //分别暴露  相当于在当前页面生命两个变量
import { fun, fun2 } from "./module2"; //统一暴露 相当于在当前页面生命两个变量
import module3 from "./module3";
//分别暴露 统一暴露 ==> 常规暴露
console.log(foo, bar, fun, fun2);
module3.foo();
$("body").css("background", "green");
