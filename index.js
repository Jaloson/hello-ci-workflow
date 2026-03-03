var express = require('express');
var app = express();

var host;
var port;

app.get('/', function (req, res) {
  res.send('Hello World! Hello CI/CD Pipeline');
});
app.get('/check', function (req, res) {
  res.send('This server is listening on ' + host + ':' + port);
});


var server = app.listen(3000, function () {

  host = server.address().address;
  port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
