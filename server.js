////'use strict';
////var http = require('http');
////var port = process.env.PORT || 1337;


////http.createServer(function (req, res) {
   
////    res.writeHead(200, { 'Content-Type': 'text/plain' });
////    res.end('Launching Soon\n');
////}).listen(port);
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var publicDir = require('path').join(__dirname, '/public');


var app = express();
app.use(express.static(publicDir))//images
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/Page1.html'));
});



app.listen(3000);