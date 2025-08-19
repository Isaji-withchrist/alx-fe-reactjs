// src/hooks/useAuth.js
import { useState } from "react";

// Simple mock authentication hook
export function useAuth() {
  // For demo purposes, default = false
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to simulate login/logout
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}
