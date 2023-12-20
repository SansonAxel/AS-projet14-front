import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';

import './styles/index.scss';
import { legacyStore, rtkStore } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={(legacyStore, rtkStore)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
