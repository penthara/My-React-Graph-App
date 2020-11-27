import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MsalProvider, Providers } from '@microsoft/mgt';

import Container from 'react-bootstrap/Container';

Providers.globalProvider = new MsalProvider({
  clientId: '09bc191c-e197-4b1a-963b-f45b44c05b5d',
  scopes: ['calendars.read', 'user.read', 'openid', 'profile', 'people.read', 'user.readbasic.all','group.read.all','group.readwrite.all','tasks.readwrite',
      'tasks.read','mail.read','people.read.all']
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



