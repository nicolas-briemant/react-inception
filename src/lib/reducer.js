import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import i18nReducer from './i18n/reducer';

export const createReducer = (asyncReducers) => {
  return combineReducers({
    routing: routerReducer, // key name is a convention used by syncHistoryWithStore
    i18n: i18nReducer,
    ...asyncReducers,
  })
};
