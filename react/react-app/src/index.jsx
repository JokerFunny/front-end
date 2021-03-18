import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { Main } from './MainPage';
import "./index.css";
import store from "./redux/store";

// setup fake backend
import { configureFakeBackend } from './Auth/_helpers';
configureFakeBackend();

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
