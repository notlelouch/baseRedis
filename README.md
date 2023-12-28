[![progress-banner](https://backend.codecrafters.io/progress/redis/1f3f57e8-a736-4b5f-ad64-861930cd7e8d)](https://app.codecrafters.io/users/codecrafters-bot?r=2qF)

# baseRedis

**baseRedis** is a simple Redis server implementation in Node.js, providing basic key-value storage and command handling over a TCP connection.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Supported Commands](#supported-commands)
- [Contributing](#contributing)

## Features

- **Concurrent Connections:** Handles concurrent connections using Node.js `net` module.
- **Supported Redis Commands:** Implements a subset of Redis commands, including PING, ECHO, SET, and GET.
- **Key Expiration:** Supports key expiration with the SET command, including the "PX" option.

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/baseRedis.git
2. Navigate to the project directory:

   ```bash
   cd baseRedis

3. Install dependencies:

   ```bash
   npm install

## Usage

1. Start the baseRedis server:

   ```bash
    node main.js
   
2. Connect to the server using a Redis client or telnet:

   ```bash
    telnet 127.0.0.1 6379
   
You can now send Redis commands to the server.

## Supported Commands

- **PING:**: Responds with PONG.
- **ECHO:**: Echoes back the specified message.
- **SET:**: Sets a key-value pair and optionally supports key expiration.
- **GET:**: Retrieves the value for a given key.

For a complete list of supported commands and their syntax, refer to the Redis Command Reference.

## Contributing

Contributions are welcome! If you have ideas for improvements, new features, or bug fixes, please open an issue or submit a pull request.




