import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import "/src/css/SignIn.css";

const SignIn = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, setCookie] = useCookies();


  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://api-remedial-production-ecd6.up.railway.app/api/users/signin",
        {
          email,
          password,
        }
      );
      const { token, username } = response.data;

      // Set cookie dengan nama pengguna dan masa berlaku selama 1 jam
      setCookie("token", token, {
        path: "/",
        expires: new Date(Date.now() + 60 * 60 * 1000),
      });
      setCookie("username", username, {
        path: "/",
        expires: new Date(Date.now() + 60 * 60 * 1000),
      });

      // Panggil fungsi onLogin dengan nama pengguna
      onLogin(username);
    } catch (error) {
      setError("Username or password is incorrect.");
    }
  };

  return (
    <>
      <div className="signIn">
        <div className="loginGambar">
          <img src="./src/assets/gambar/login.jpg" alt="Login" />
        </div>
        <div className="inputLogin">
          <h1>Selamat Datang!</h1>
          {error && <p>{error}</p>}
          <div className="mid">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="tombolLogin" onClick={handleLogin}>Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
