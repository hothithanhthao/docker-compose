const http = require('http');
const IP = require('ip');

const ipAddress = IP.address();
const hostname = ipAddress;
const port = 8001;

var service2Res = '';
callback = function(response) {
  response.on('data', function (chunk) {
    service2Res += chunk;
  });
}

http.get(`http://service2:8002`, callback).end();
const server = http.createServer((req, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
 
  response.write(`Hello from ${req.client.remoteAddress}:${req.client.remotePort} to ${req.client.localAddress}:${req.client.localPort}\n`);
  response.write(service2Res)
   
  response.end()   
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});