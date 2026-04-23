// src/routes/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  // If NOT logged in, redirect to /login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the actual page
  return children;
};

export default ProtectedRoute;