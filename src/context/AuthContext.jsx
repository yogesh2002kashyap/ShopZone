// src/context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Persist login state too
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('shopzone-auth') === 'true';
  });

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('shopzone-auth', 'true');
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('shopzone-auth');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);