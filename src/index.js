import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootNode = document.getElementsByTagName('epilot-gmaps')[0]

if (!rootNode) {
  console.error('Failed to load custom block app, a node with tag name: "epilot-maps" is required.');
} else {
  const root = ReactDOM.createRoot(rootNode);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  reportWebVitals();
}