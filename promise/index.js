const MyPromise = require("./myPromise");
function p1() {
  return new MyPromise(function (resolve, reject) {
    setTimeout(function () {
      resolve("p1");
    }, 2000);
  });
}
// function p2() {
//     return new MyPromise(function (resolve, reject) {
//         resolve('p2')
//     })
// }

// MyPromise
//     .all(['a', 'b', p1(), p2(), 'c'])
//     .then(result => console.log(result), reason => console.log(reason))
MyPromise.resolve("10").then(value => console.log(value));
MyPromise.resolve(p1()).then(value => console.log(value));
