import React from 'react';
import ReactDOM from 'react-dom/client';
// This is the entry point of the React app.
// It mounts the app into the DOM and wraps everything inside BrowserRouter and global styles.
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyles } from './styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
