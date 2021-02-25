import React from 'react';
import { render } from 'react-dom';
import { Main } from './MainPage';
import "./index.css";

// setup fake backend
import { configureFakeBackend } from './Auth/_helpers';
configureFakeBackend();

render(
  <Main />, 
  document.getElementById('root')
);
