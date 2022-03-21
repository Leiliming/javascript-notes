//vue简易版数据劫持

let data = {
  name: "张三",
  car: {
    title: "宝马",
  },
};
let vm = { age: 200 };

Object.defineProperty(vm, "name", {
  get() {
    console.log("get执行");
    return data.name;
  },
  set(value) {
    console.log("set执行");
    //同时进行模板渲染
    data.name = value;
  },
});

Object.defineProperty(vm, "car", {
  get() {
    return data.car;
  },
  set(value) {
    //同时进行模板渲染
    console.log("set", value);
    data.car = value;
  },
});
// console.log("1", vm);
// console.log("2", vm.name);
// console.log("3", data.name);
// vm.name = "李四";
// console.log("5", data.name);
console.log(data.car === vm.car);
vm.car.price = 1000;
// vm.car = { title: "奔驰" };
console.log(vm);
console.log(data);
