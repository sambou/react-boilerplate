import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import app from './app.js';

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(React.createElement(app), document.getElementById('app-hook'));

});
