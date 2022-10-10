const http = require('http');
const IP = require('ip');

const ipAddress = IP.address();
const hostname = ipAddress;
const port = 8002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.write(`Hello from ${req.client.remoteAddress}:${req.client.remotePort} to ${req.client.localAddress}:${req.client.localPort}\n`);
  res.end()
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});