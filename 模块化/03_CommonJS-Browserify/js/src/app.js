let uniq = require("uniq");
var module1 = require("./module1");
var module2 = require("./module2");
var module3 = require("./module3");
module1.foo();
module2();
module3.foo();
console.log(uniq(module3.arr));
