const net = require("net");

console.log("Logs from your program will appear here!");

const server = net.createServer((connection) => {
  // Handle connection
  console.log("+PONG\r\n")
});

server.listen(6379, "127.0.0.1");
