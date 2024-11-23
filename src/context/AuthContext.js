import React, { createContext, useState, useContext, useEffect } from 'react';
import { mockLogin, logout, getUserFromToken } from '../utils/authUtils';

// Create Context
const AuthContext = createContext();

// Custom hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Load user data from localStorage when the app loads
  useEffect(() => {
    const storedUser = getUserFromToken();
    console.log(storedUser , "user on context")
    if (storedUser) {
      setUser(storedUser);  // Set user from localStorage if available
    }
    setLoading(false);
  }, []);

  // Handle login using mockLogin utility function
  const handleLogin = (email, password, requiredRole) => {
    setLoading(true); // Set loading to true during login attempt
    try {
      const { user, error } = mockLogin(email, password, requiredRole);

      if (error) {
        setError(error);  // Set error if login fails
        setUser(null);     // Reset user state
        setLoading(false); // Set loading to false after login attempt
      } else {
        console.log('Login successful, saving user to localStorage:', user);
        setUser(user);     // Set user data in state if login succeeds
        setError(null);    // Clear any previous errors
        localStorage.setItem('user', JSON.stringify(user)); // Store user data with role in localStorage
        setLoading(false);
      }
    } catch (e) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  // Handle logout using logout utility function
  const handleLogout = () => {
    logout();
    setUser(null);
    localStorage.removeItem('user');  // Clear user from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, loading, handleLogin, handleLogout, error }}>
      {children}
    </AuthContext.Provider>
    
  );
};



