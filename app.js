const http = require('http');
const os = require('os');

console.log("Shopping app starting unhealthy...");

let requestCount = 0;

let handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  requestCount++;
  if (requestCount > 2) {
    response.writeHead(500);
    response.end("Error in start up! Restart needed");
    return;
  }
  response.writeHead(200);
  response.end("You've hit " + os.hostname() + "\n");
};

let www = http.createServer(handler);
www.listen(5000);