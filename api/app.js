const http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain"});
  response.write('hello whomstsoever');
  response.end();
}).listen(80);