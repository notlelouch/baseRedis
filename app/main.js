const net = require("net");

const server = net.createServer();
// Handling concurrent connections
server.on('connection', (connection) => {
  console.log("New client connected");
  connection.on('data', (data) => {
    const commands = data.toString().split("\r\n")
    
    commands.filter(command => command === "ping").forEach(() => {
      connection.write("+PONG\r\n");
    });
    commands.forEach((command, index) => {
      
      if (command.toLocaleUpperCase === "PING") {
        connection.write("+PONG\r\n");
      }

      if (command.toLocaleUpperCase === "ECHO") {
        let msg = commands[index + 2]
        if (msg) {
          connection.write(`+${msg}\r\n`);
        }
      }
    });
  });
  // Ending connection
  connection.on('end', () => {
    console.log("Client disconnected");
  });
}); 

server.listen(6379, "127.0.0.1");
