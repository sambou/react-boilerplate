import * as express  from 'express';
import * as webpack  from 'webpack';

export function enableDevTools(app: express.Express) {
  'use strict';

  let config   = require('../../webpack/webpack.development.config.js');
  let compiler = webpack(config);

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
