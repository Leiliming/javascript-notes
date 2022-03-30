const express = require("express");
const { get } = require("express/lib/response");

const app = express();

app.get("/server", (request, response) => {
  //设置响应头
  response.setHeader("Access-Controll-Allow-Origin", "*");
  //设置响应体
  response.send("hello express");
});
app.listen(8000, () => {
  console.log("服务器已经启动,8000端口监听中。。。。");
});
