import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import 'availity-uikit';
import "availity-uikit/scss/_bootstrap.scss";
import App from './App';
import './index.scss';

render(
  <Router basename="/">
    <App />
  </Router>,
  document.querySelector('#root')
);