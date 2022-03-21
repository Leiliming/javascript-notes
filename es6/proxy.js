let handler = {
  // get: function (target, name) {
  //   // target 对象本身 name 用户 “.” 后面的值
  //   // console.log("target:", target);
  //   // console.log("name:", name);
  //   if (target.hasOwnProperty(name)) {
  //     return target[name];
  //   } else {
  //     console.warn("没有找到你要的变量");
  //   }
  // },
  // set(target, name, value) {
  //   // console.log(target);
  //   // console.log(name);
  //   // console.log(value);
  //   target[name] = "#" + value;
  // },
  // deleteProperty(target, name) {
  //   delete target[name];
  // },
  eumerate(target) {
    console.log("eumerate->",target);
    return 1
  },
};
var p = new Proxy({}, handler);
p.a = 1;
p.abc = "abc";
for (var i in p) {
  console.log("p->", i);
}
