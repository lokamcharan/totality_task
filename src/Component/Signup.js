import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      alert("User already exists!");
    } else {
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful!");
      navigate("/login");
    }
  };

  return (
    <div className="one">
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Sign;
