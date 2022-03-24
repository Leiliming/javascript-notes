const { effect } = require("@vue/reactivity");

let currentEffect;
class Dep {
  constructor() {
    this.effects = new Set();
  }

  //1.收集依赖
  depend() {
    if (currentEffect) {
      this.effects.add(currentEffect);
    }
  }
  //2.触发依赖
  notice() {
    this.effects.forEach(effect => effect());
  }
}
let dep = new Dep(10);

function effectWatch(effect) {
  currentEffect = effect;
  effect();
  currentEffect = null;
}

// reactive
// object -> key -> dep
const targetMap = new Map();
function getDap(target, key) {
  let depsMap = targetMap.get(target);

  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  console.log(targetMap);
  return dep;
}
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      // key - dep
      // dep 我们存储再哪里
      // 让key和dep做一个匹配
      const dep = getDap(target, key);
      // 依赖收集
      dep.depend();
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      const result = Reflect.set(target, key, value);
      const dep = getDap(target, key);
      console.log(key);
      // 依赖收集 获取到dep
      dep.notice();
      return result;
    },
  });
}
let obj = reactive({
  a: 123,
});
effectWatch(() => {
  let b = obj.a + 1;
});
obj.a = 168;
obj.age = 18;
