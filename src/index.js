import React        from 'react';
import ReactDOM     from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import createStore  from './store/index.js';
import App          from './containers/app.js';

import './style.scss';


document.addEventListener('DOMContentLoaded', () => {

  let store = createStore();

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path='/' component={App} />
      </Router>
    </Provider>,
    document.getElementById('app-hook'));

});
