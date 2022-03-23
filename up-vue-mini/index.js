const { effect, reactive } = require("@vue/reactivity");
// let a = 20
// let b;
// function update() {
//   b = a + 10;
//   console.log(b);
// }
// update();
// a = 10;
// update();
// //声明一个响应式对象
// let a = reactive({
//   value: 1,
// });
// let b;
// effect(() => {
//   b = a.value + 10;
//   console.log(b);
// });
// a.value = 30;

let targetMap = new Map();
let target = { name: "雷", age: "19" };
let depsMap = targetMap.get(target);
if (!depsMap) {
  depsMap = new Map();
  targetMap.set(target, depsMap);
}
console.log(targetMap);
let dep = depsMap.get("name");
if (!dep) {
  dep = new Set();
}
console.log(dep);
