(function (window,jQuery) {
  let msg = "module4";
  function foo() {
    console.log("foo", msg);
  }
  window.module4 = { foo };
  $('body').css('background','red')
})(window,jQuery);
//增强模式就是引入依赖