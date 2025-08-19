// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

// fake authentication (replace with real auth later)
const isAuthenticated = false; 

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
