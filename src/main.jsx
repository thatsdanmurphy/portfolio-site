// src/main.jsx
import { inject } from '@vercel/analytics';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import './styles/base.css';
import './styles/layout.css';

// Initialize Vercel Analytics only in production
if (import.meta.env.MODE === 'production') {
  inject();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
