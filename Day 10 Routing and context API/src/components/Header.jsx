import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";
import useAuth from "../context/hooks/useAuth";
export default function Header() {
  const { isLoggedIn, login, logout } = useAuth();
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Welcome to Bank of India</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="/accounts">Accounts</Link>
      <h1>Counter : {counter}</h1>
      <br />
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}
