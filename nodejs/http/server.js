const net = require("net");
//创建服务端
let server = net.createServer();
const PORT = 1234;
const HOST = "localhost";
server.listen(1234, () => {
  console.log("服务端启动了");
});

server.on("listening", socket => {
  console.log(`服务器已经在${HOST}:${PORT}`);
});

//接收消息 回写消息
server.on("connection", socket => {
  socket.on("data", chunk => {
    const msg = chunk.toString();
    socket.write(Buffer.from("您好" + msg));
  });
  //回数据
});
