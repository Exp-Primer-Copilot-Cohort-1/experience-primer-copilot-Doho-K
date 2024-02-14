// Create web server and serve comments from file

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Comments</h1>');
  fs.readFile('comments.txt', 'utf8', function(err, data) {
    res.write(data);
    res.end();
  });
}).listen(8000, '