let data = {
  name: "张三",
  age: 18,
};
//模拟vue2响应式,添加一个属性捕获不到，删除一个属性也捕获不到
let vm = {};
let objKeys = Object.keys(data);
objKeys.forEach(ele => {
  Object.defineProperty(vm, ele, {
    configurable:true,
    get() {
      return data[ele];
    },
    set(value) {
      console.log("有人修改了name属性，我发现了，我要去更新界面");
      data[ele] = value;
    },
  });
});
vm.name = "李四";

