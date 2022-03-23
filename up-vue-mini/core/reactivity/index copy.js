//响应式库

//依赖
let currentEffect;
class Dep {
  //1.收集依赖
  constructor(val) {
    //es6
    this.effects = new Set(); //依赖不能重复收集
    this._val = val;
  }
  get value() {
    this.depend();
    return this._val;
  }
  set value(newVal) {
    this._val = newVal;
    this.notice();
  }
  //1. 收集依赖
  depend() {
    if (currentEffect) {
      //添加依赖
      this.effects.add(currentEffect);
    }
  }
  //2.触发依赖
  notice() {
    // 触发一下我们之前收集到的依赖
    this.effects.forEach(effect => {
      effect();
    });
  }
}
const dep = new Dep(10);
console.log(dep);
function effectWatch(effect) {
  //收集依赖
  currentEffect = effect;
  effect();
  currentEffect = null;
}
let b;
effectWatch(() => {
  b = dep.value + 10;
  console.log("b", b);
});

dep.value = 20;
// dep.value = 30;
const targetMap = new Map();
let target = { age: 19 };

let depsMap = new Map();
targetMap.set(target, depsMap);

console.log(depsMap.get(19));
