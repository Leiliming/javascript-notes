const MyPromise = require("./myPromise");
function p1() {
  return new MyPromise(function (resolve, reject) {
    setTimeout(function () {
      resolve("p1");
    }, 2000);
  });
}
function p2() {
  return new MyPromise(function (resolve, reject) {
    reject("p2 reject");
  });
}

// MyPromise
//     .all(['a', 'b', p1(), p2(), 'c'])
//     .then(result => console.log(result), reason => console.log(reason))
p2()
  .finally(() => {
    return p1();
  })
  .then(value => console.log("111", value))
  .catch(resaon => {
    console.log("resaon", resaon);
  });
