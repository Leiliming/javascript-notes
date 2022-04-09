import { track, trigger } from "./effect";
export function reactive(target) {
  return new Proxy(target, {
    get(target, key) {
      let res = Reflect.get(target, key);
      track(target, key);
      return res;
    },
    set(target, key, value) {
      let res = Reflect.set(target, key, value);
      trigger(target, key);
      return res;
    },
  });
}
