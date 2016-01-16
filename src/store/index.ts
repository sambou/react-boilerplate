import { createStore, applyMiddleware } from 'redux';
import * as thunkMiddleware             from 'redux-thunk';
import appReducer                       from '../reducers/index.ts';
import logger                           from '../middleware/logger.ts';

export default (reducer: Redux.Reducer = appReducer): Redux.Store => {
  let createStoreWithMiddleware = applyMiddleware(thunkMiddleware.default, logger)(createStore);

  return createStoreWithMiddleware(reducer);
};
