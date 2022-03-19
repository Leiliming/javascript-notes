//记忆函数
function getArea(r) {
  return Math.PI * r * r;
}

function memoize(f) {
  let cache = {};
  return function () {
    let key = JSON.stringify(arguments);
    cache[key] = cache[key] || f.apply(f, arguments); //将 arguments 展开传递给 f
    return cache[key];
  };
}
let getAreaWithMemory = memoize(getArea);
getAreaWithMemory(4, 5);
getAreaWithMemory(4, 5);
getAreaWithMemory(4, 5);
// console.log(getAreaWithMemory(4));
// console.log(getAreaWithMemory(4));
/*
纯函数：相同的输入永远会得到相同的输出，而且没有任何可观察的副作用
纯函数好处
1、可缓存
2、可测试，让测试更方便（单元测试）
3、并行处理

副作用

副作用让一个函数变的不纯(如上例)，纯函数的根据相同的输入返回相同的输出，如果函数依赖于外部
的状态就无法保证输出相同，就会带来副作用。
副作用来源：
1、配置文件
2、数据库
3、获取用户的输入
*/
