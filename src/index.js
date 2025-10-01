import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';
import Router from './components/router';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Router />
  </HashRouter>
);
