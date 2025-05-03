import React from "react";
import useAuth from "../context/hooks/useAuth";

export default function LoginProtectionWrapper({ child }) {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) return child;

  return (
    <div>
      <h1>You are not logged in please login</h1>
    </div>
  );
}
