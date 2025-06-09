import React, { useState } from "react";
import useAuth from "../../context/hooks/useAuth";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("a.m2001nov@gmail.com");
  const [pass, setPassword] = useState("12345678");

  const { login, loading } = useAuth();

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-3 text-center">Login</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(email, pass);
          setEmail("");
          setPassword("");
        }}
      >
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            type="email"
            name="email"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            value={pass}
            onChange={(e) => setPassword(e.currentTarget.value)}
            type="password"
            name="password"
            className="form-control"
            required
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className="btn btn-primary w-100"
        >
          {loading ? "Please Wait.." : "Login"}
        </button>
        <Link to="/register">Dont't have an account </Link>
      </form>
    </div>
  );
};

export default Login;
