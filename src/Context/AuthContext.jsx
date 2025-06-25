/**
 * @author Julian David Vera Godoy
 * @description Context for managing authentication state in a React application
* @date 2025-06-24
 */
import React from 'react';
//HOOKS________
import { createContext, useContext, useState } from 'react';
//UTILS________
import { isAuthenticated, logout, login as doLogin } from '../utils/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  const login = (username, password) => {
    const ok = doLogin(username, password);
    setIsLoggedIn(ok);
    return ok;
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}