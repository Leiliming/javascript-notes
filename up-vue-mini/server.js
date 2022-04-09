import { reactive } from "./reactive";
import { effect } from "./effect";
let original = {
  age: 18,
  name: "张三",
};
let obj = reactive(original);
let nextAge;
let nextName;
effect(() => {
  nextAge = obj.age + 1;
});
effect(() => {
  nextName = obj.name + "~";
});
obj.age++;
obj.name = "李四";
console.log(nextAge);
console.log(nextName);
