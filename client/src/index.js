import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
// import Apps from "./components/App";
import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/authContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <App />
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>
);