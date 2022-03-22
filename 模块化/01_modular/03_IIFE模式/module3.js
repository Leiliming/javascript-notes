(function (window) {
  let msg = "module3";
  function foo() {
    console.log("foo", msg);
  }
  window.module3 = { foo };
})(window);
