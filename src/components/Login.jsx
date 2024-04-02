import React, { useState } from "react";
import "./Login.css";
import { login, getAllUsers, getUserCart } from "../API";
import { useNavigate } from "react-router";

// passing down setToken, setUser, setCart

const Login = ({ setToken, setUser, setCart }) => {
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
    //go to api(index) call login  and get token
    const token = await login(username, password);
    setToken(token);
    //calling getAllUsers passing in username
    const user = await getAllUsers(username);
    //calling getUserCart
    const usersCart = await getUserCart(user.id);

    console.log("user --->", user, "usersCart", usersCart);
    //reset password and username

    setUser(user);
    setCart(usersCart);
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
