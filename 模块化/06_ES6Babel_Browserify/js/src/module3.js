// 默认暴露 可以暴露任意数据类型，暴露生命数据接收到的就是什么数据
// export default value;

export default {
  msg: "默认暴露",
  foo() {
    console.log(this.msg);
  },
};
