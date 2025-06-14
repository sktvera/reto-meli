// components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
}