// context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
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