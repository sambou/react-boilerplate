'use strict';

import * as express       from 'express';
import { enableDevTools } from './webpack-dev-tools';
var appRoot = require('app-root-path');

let app  = express();
let port = process.env.PORT || 3000;

console.log();
if (process.env.NODE_ENV === 'development') {
  enableDevTools(app);
}

app.use('/', express.static(appRoot + '/target'));
app.get('*', function(req, res) {
  'use strict';

  res.sendFile(appRoot + '/target/index.html');
});

app.listen(port);
