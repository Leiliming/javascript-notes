const MyPromise = require("./1.then.js");
const p = new MyPromise((resolve, reject) => {
  resolve("h");
});
console.log(p);
