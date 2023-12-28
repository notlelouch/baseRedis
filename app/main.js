let hashMap = new Map();
const net = require("net");

const server = net.createServer();
// Handling concurrent connections
server.on('connection', (connection) => {
  console.log("New client connected");
  connection.on('data', (data) => {
    const commands = data.toString().split("\r\n");
    commands.forEach((command, index) => {
      
      if (command.toLocaleUpperCase() === "PING") {
        connection.write("+PONG\r\n");
      }

      else if (command.toLocaleUpperCase() === "ECHO") {
        let msg = commands[index + 4];
        if (msg) {
          connection.write(`+${msg}\r\n`);
        }
      }

      else if (command.toLocaleUpperCase() === "SET") {
        let key = commands[index + 4];
        let value = commands[index + 6];
        let timeout = commands[index + 10]; 
        if (key && value) {
          hashMap.set(key, value);
          connection.write(`+OK\r\n`);
          if (commands[index + 6].toLocaleUpperCase() === "PX") {
            if (timeout) {
              setTimeout(() => {
                hashMap.delete(key);
              }, timeout); 
          }}
        }
      }

      else if (command.toLocaleUpperCase() === "GET") {
        let key = commands[index + 4];
        if (key) {
          let value = hashMap.get(key);
          if (value) {
            connection.write(`$${value.length}\r\n${value}\r\n`);
          }
          else {
            connection.write(`-ERR Key not found\r\n`);
          }
        }
        else {
          connection.write(`$-1\r\n`);
        }
      }
      else {
        connection.write(`-ERR Invalid syntax ${commands}\r\n`);
      }
    });
  });
  // Ending connection
  connection.on('end', () => {
    console.log("Client disconnected");
  });
}); 
server.listen(6379, "127.0.0.1");