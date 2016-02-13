'use strict';

import * as React from 'react';
import SamplePage from '../components/sample-page.tsx';

export default React.createClass({

  render() {
    let manifest = require('../../../target/manifest.json');

    return (
      <html>
        <head>
          <link href="/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
          <link href={manifest['main.css']} rel="stylesheet" />
          <title>TypeScript App</title>
        </head>
        <body>
          <h1>No Script Mode</h1>
          <SamplePage handleSampleAction={() => {}} sampleText='noscript' />
        </body>
      </html>
    );
  }

});
