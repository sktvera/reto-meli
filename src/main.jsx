import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext.jsx';
import './index.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <AuthProvider> {/* ✅ AuthProvider envuelve TODO */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);