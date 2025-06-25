/**
 * @author Julian David Vera Godoy
 * @description Private route component to protect routes that require authentication
* @date 2025-06-24
 */
import React from 'react';
//HOOKS________
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
}