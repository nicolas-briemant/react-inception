import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import history from './lib/history';
import { configureStore } from './lib/store';
import { log } from './lib/log';
import { createRoutes } from './routes';
import meta from '../package.json';
import I18nProvider from './lib/i18n/provider';
import messages from './lib/i18n/messages';
import Layout from './components/layout';
import './assets/styles/app.less';

log(meta);

const initialState = {};
const store = configureStore(initialState, history);
syncHistoryWithStore(history, store);
const routes = createRoutes(store);

render(
  <Provider store={store}>
    <I18nProvider messages={messages}>
      <Router history={history} routes={routes}>
        <Layout>
          <Switch>
            {routes.map((route, key) => <Route key={key} { ...route } />)}
          </Switch>
        </Layout>
      </Router>
    </I18nProvider>
  </Provider>,
  document.getElementById('root')
);
