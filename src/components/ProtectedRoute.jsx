import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const isAuthenticated = true; // Replace with actual authentication logic
  return isAuthenticated ? children : <Navigate to="/login" />;
}