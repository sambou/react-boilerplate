var express = require('express');
var app = express();
var webpack = require('webpack');
var configPath = './webpack.' + process.env.NODE_ENV + '.config';
var config = require(configPath);

var port = process.env.PORT || 3000;
var compiler = webpack(config);

if (process.env.NODE_ENV === 'development') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
}

app.use('/', express.static(__dirname + '/target'));
app.get('*', function(req, res) {
  'use strict';

  res.sendFile(__dirname + '/target/index.html');
});

app.listen(port);
