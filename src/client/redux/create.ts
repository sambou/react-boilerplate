import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './root.ts';
import * as thunk from 'redux-thunk';
import logger from './middleware/logger.ts';

export default (reducer: Redux.Reducer = rootReducer): Redux.Store => {
  let createStoreWithMiddleware = compose(
    applyMiddleware(thunk['default'], logger),
    window['devToolsExtension'] ? window['devToolsExtension']() : f => f
  )(createStore);

  return createStoreWithMiddleware(reducer);
};
