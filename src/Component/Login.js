import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
            />
          </div>
          <div className="input-group">
            <label>
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="login-link">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
