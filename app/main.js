const net = require("net");

console.log("Logs from your program will appear here!");

const server = net.createServer((connection) => {
  // Handle connection
});

server.listen(6379, "127.0.0.1");
