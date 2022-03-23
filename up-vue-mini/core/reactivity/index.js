const { effect } = require("@vue/reactivity");

let currentEffect;
class Dep {
  constructor(val) {
    this.effects = new Set();
    this._val = 10;
  }
  get value() {
    this.depend();
    return this._val;
  }
  set value(newVal) {
    this._val = newVal;
    this.notice();
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
effectWatch(() => {
  b = dep.value + 10;
  console.log("b", b);
});

// reactive
// object -> key -> dep
