import React, { useState } from "react";
import "./Login.css";
import { login } from "../API";
import { useNavigate } from "react-router";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    //so it does not refresh
    event.preventDefault();
    //go to api and get token
    const token = await login(username, password);
    setToken(token);
    //reset password and username
    setPassword("");
    setUsername("");
    //navigate back to home path
    navigate("/");
  };

  return (
    <div className="login-container">
      {/* when form submits it will take in username and password */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username"> Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
