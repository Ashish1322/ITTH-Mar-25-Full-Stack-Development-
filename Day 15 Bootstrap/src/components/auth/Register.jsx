import React, { useState } from "react";
import useAuth from "../../context/hooks/useAuth";
const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const { signup, loading } = useAuth();
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-3 text-center">Signup</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signup(email, pass, name, gender);
          setEmail("");
          setPassword("");
          setName("");
        }}
      >
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            type="text"
            name="name"
            className="form-control"
            required
          />
        </div>
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
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            onChange={(e) => setGender(e.currentTarget.value)}
            name="gender"
            className="form-select"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          disabled={loading}
          type="submit"
          className="btn btn-success w-100"
        >
          {loading ? "Please Wait.." : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default Register;
