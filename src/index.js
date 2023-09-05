import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GraphInfoProvider } from './contexts/graph-info/graph-info';

const root = ReactDOM.createRoot(document.getElementById('demo'));
root.render(
  <React.StrictMode>
    <GraphInfoProvider>
      <App />
    </GraphInfoProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
