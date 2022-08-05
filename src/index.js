import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './pages/App';
import Config from './pages/Config';
import reportWebVitals from './reportWebVitals';
import './variables.css';
import './index.css';

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
          <Route path="/config" element={<Config />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
