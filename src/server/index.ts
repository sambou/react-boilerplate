'use strict';

import * as express       from 'express';
import { enableDevTools } from './webpack-dev-tools';
import { renderOnServer } from './noscript'

var appRoot = require('app-root-path');

let app  = express();
let port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
  enableDevTools(app);
}

renderOnServer(app);

app.use('/', express.static(appRoot + '/target'));
app.get('*', (req, res) => {
  res.sendFile(appRoot + '/target/index.html');
});

app.listen(port);
