//模拟Vue3中的响应式
//#region

let person = {
  name: "张三",
  age: 18,
};
const p = new Proxy(person, {
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
// console.log(person);
p.name = "李四";
p.age = 100;
p.sex = "男";
console.log(person);

//#endregion

let obj = { a: 1, b: 2 };
