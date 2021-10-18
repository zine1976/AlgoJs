var port = 5595;
var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();

    }
    else if (req.url == "/student") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();

    }
    else if (req.url == "/admin") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();

    }
    else if (req.url == "/DWWM19") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>La page des bests.</p></body></html>');
        res.end();

    }
    else
        res.end('Invalid Request!');

});

server.listen(port); //6 - listen for any incoming requests

console.log('Node.js web server at  '+port+' is running..')
