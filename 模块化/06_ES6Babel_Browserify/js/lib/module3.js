"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 默认暴露 可以暴露任意数据类型，暴露生命数据接收到的就是什么数据
// export default value;
var _default = {
  msg: "默认暴露",

  foo() {
    console.log(this.msg);
  }

};
exports.default = _default;