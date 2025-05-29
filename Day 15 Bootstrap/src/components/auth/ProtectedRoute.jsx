import React from "react";
import useAuth from "../../context/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (user) {
    return children;
  }
  return <Navigate to="/" />;
}
