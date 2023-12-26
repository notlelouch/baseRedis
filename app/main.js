const net = require("net");

const server = net.createServer((connection) => {
  // Handle connection
  connection.on('data', (data) => {
    const commands = data.toString().split("\r\n")
    commands.filter(command => command === "ping").array.forEach(() => {
      connection.write("+PONG\r\n");
    });
  });
});

server.listen(6379, "127.0.0.1");
