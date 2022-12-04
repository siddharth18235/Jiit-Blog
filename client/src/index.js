import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
// import Apps from "./components/App";
import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import {  AuthProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
