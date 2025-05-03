import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLoggedIn == false) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <div>
      <h1>Account</h1>
      <p>Balance : 893738INR</p>
    </div>
  );
}
