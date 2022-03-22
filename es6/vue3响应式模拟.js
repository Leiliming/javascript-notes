//模拟Vue3中的响应式
//#region

let data = {
  name: "张三",
  age: 18,
};
const vm = new Proxy(data, {
  get(target, propName) {
    console.log(`有人读取了p身上的${propName}属性`);
    return Reflect.get(target, propName);
  },
  set(target, propName, value) {
    console.log(`有人修改了p身上的${propName}属性，我要去更新界面了`);
    Reflect.set(target,propName,value)
  },
  deleteProperty(target, propName) {
    console.log(`有人删除了p身上的${propName}属性，我要去更新界面了`);
    return Reflect.deleteProperty(target,propName)
  },
});
// console.log(data);
vm.name = "李四";
vm.age = 100;
vm.sex = "男";
console.log(data);
console.log(vm.age)
//#endregion

let obj = { a: 1, b: 2 };
