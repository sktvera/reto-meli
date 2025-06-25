/**
 * @author Julian David Vera Godoy
 * @description Sistema de autenticación con React y Context API
* @date 2025-06-24
 */
import React from 'react';
//HOOKS________
import { Routes, Route } from 'react-router-dom';
//COMPONENTES________
import LoginPage from './pages/Login/Login';
import Home from './pages/Home/Home.jsx';
import PrivateRoute from './components/public/PrivateRoute.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
      path="/"
      element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
      }
      />
      <Route
      path="/profile"
      element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
      }
      />
    </Routes>
  );
}


/* 
- [Usuario entra] → Formulario de login → login() guarda token en localStorage + actualiza Context

- [Usuario recarga] → Context se resetea → lee token de localStorage → restaura sesión

- [Usuario cierra sesión] → logout() borra token + resetea Context 
*/