import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import "/src/css/SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, handleLogin } = useContext(AuthContext);
  

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <>
      <div className="signIn">
        <div className="loginGambar">
          <img src="./src/assets/gambar/login.jpg" alt="Login" />
        </div>
        <div className="inputLogin">
          <div className="mid">
            <form onSubmit={handleSubmit}>
            <h1>Selamat Datang!</h1>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="tombolLogin" type="submit">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
