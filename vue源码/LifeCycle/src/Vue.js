import Compile from "./Compile";

export default class Vue {
  constructor(options) {
    //把参数options对象存为$options，目的是让Vue使用者也可以通过实例的继承使用到options
    this.$options = options || {};
    //数据
    this._data = options.data || undefined;
    //数据要变为响应式的
    //模板编译
    new Compile(options.el, this);
  }
}
