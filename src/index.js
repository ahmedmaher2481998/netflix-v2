import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import { GlobalStyle } from './global-styles';
import App from './App';
import { app } from './lib/firebase';
import { FireBaseContext } from './context/firebase';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FireBaseContext.Provider value={{ firebase: app }}>
      <GlobalStyle />
      <App />
    </FireBaseContext.Provider>
  </React.StrictMode>
);
