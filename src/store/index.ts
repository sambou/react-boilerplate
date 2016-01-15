import { createStore, applyMiddleware } from 'redux';
import * as thunkMiddleware             from 'redux-thunk';
import reducer                          from '../reducers/index.ts';
import logger                           from '../middleware/logger.ts';

export default () => {
  let createStoreWithMiddleware = applyMiddleware(thunkMiddleware.default, logger)(createStore);

  return createStoreWithMiddleware(reducer);
};
