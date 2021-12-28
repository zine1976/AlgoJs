var http = require('http');
var fs = require('fs');
var birth = require('./backup');
var item = require('./cession');


http.createServer(function (req, res) {
fs. readFile('index.html', function(err,data){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write (data + item.createitem() + birth.backup(16));
  return res.end('Hello World!');
});
}).listen(8080);


[
  { 
    "name": "John", 
    "age": 21,
    "language": ["JavaScript", "PHP", "Python"] 
  },
  {
     "name": "Smith",
     "age": 25,
     "language": ["PHP", "Go", "JavaScript"] 
  }
]