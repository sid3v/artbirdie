var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  fs=require("fs");
  var passhello=new Buffer(256);
  passhello=fs.readFileSync('index.html');
  var hello=passhello.toString();
  response.send(hello);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
