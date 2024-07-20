import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://cdn.es.gov.br/fonts/font-awesome/css/font-awesome.min.css"
    />
    <App />
  </React.StrictMode>,
);
