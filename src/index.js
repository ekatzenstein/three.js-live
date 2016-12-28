import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './routes';

import rootReducer from './reducers';

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
