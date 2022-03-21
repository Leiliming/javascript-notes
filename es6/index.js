function test1(a = "1") {
  console.log(a);
  var a = "2";
  function a() {}
}
function test2(a = "1") {
  console.log(a);
  function a() {}
}

test1();
test2();
