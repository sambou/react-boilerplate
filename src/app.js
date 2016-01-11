import React from 'react';

import { Router, Route, IndexRoute } from 'react-router';

import NoMatch from './no-match.js';

export default React.createClass({

  render() {
    return (
        <Router>
          <Route path="/" component={NoMatch} />
        </Router>
    );
  }

});
