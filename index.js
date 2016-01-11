var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/target'));

app.get('*', function(req, res) {
  'use strict';

  res.sendFile(__dirname + '/target/index.html');
});

app.listen(port);
