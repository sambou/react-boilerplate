import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware                  from 'redux-thunk';
import reducer                          from '../reducers/index.js';
import logger from '../middleware/logger.js';

export default () => {
  let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore);

  return createStoreWithMiddleware(reducer);
};
