import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { createReducer } from './reducer';

export const withLogger = (middlewares) => {
  if (process.env.NODE_ENV === 'production') return middlewares;

  const logger = createLogger({
    duration: true,
    timestamp: false,
    collapsed: true,
  });

  return [ ...middlewares, logger ];
};

export const withHotReducers = (store) => {
  if (!module.hot) return store;

  module.hot.accept('./reducer', () => {
    import('./reducer').then((reducerModule) => {
      const createReducer = reducerModule.createReducer;
      const nextReducer = createReducer(store.asyncReducers);

      store.replaceReducer(nextReducer);
    });
  });

  return store;
}

export const configureStore = (initialState = {}, history) => {
  const middlewares = withLogger([
    thunk,
    // https://github.com/jeffbski/redux-logic
    routerMiddleware(history),
  ]);

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(
    createReducer(),
    initialState,
    compose(...enhancers)
  );

  store.asyncReducers = {};

  return withHotReducers(store);
};
