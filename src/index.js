import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';

import TaskReducer from './reducers/task';
import App from './App';


const store = createStore(
  TaskReducer,
  window.devToolsExtension && window.devToolsExtension()
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);






