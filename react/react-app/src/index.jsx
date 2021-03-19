import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import Main from './MainPage/Main';
import { createStore, applyMiddleware, compose } from 'redux';
import { history } from './Auth/_helpers';
import "./index.css";

// setup fake backend
import { configureFakeBackend } from './Auth/_helpers';
import reducers from './redux/reducers';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import sagas from './redux/sagas';

configureFakeBackend();

const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middlewars = [ thunk, sagaMiddleware, routeMiddleware ];
const store = createStore(reducers(history), compose(applyMiddleware(...middlewars)));
sagaMiddleware.run(sagas);

render(
  <Provider store= {store}>
    <Main />
  </Provider> ,
  document.getElementById('root')
);
