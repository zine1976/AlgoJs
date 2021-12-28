var http = require('http');

const data = require('./users.json');
const string = JSON.stringify(data);
console.log(data);


http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write("welcome " + string);
    res.end();
}).listen(3030);
