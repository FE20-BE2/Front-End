import React, { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import "/src/css/SignIn.css";
import loginGambar from "/src/assets/gambar/login.jpg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, handleLogin } = useContext(AuthContext);
  const [isUnmounting, setIsUnmounting] = useState(false);

  useEffect(() => {
    
    return () => {
      // Ketika komponen dibongkar (unmounted), set isUnmounting menjadi true
      setIsUnmounting(true);
    };
    
  }, []);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    if (!isUnmounting) {
      // Set state error menjadi string kosong setelah proses login selesai
      setError("");
    }
  };

  return (
    <>
      <div className="signIn">
        <div className="loginGambar">
          <img src={loginGambar} alt="Login" />
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
