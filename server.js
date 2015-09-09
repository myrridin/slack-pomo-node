var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  console.log("Received pomo command from " + req.body.user_name + ".");
  console.log(req.body);
  res.send('Hi Pomo');
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
