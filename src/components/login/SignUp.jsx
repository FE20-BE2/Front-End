import "/src/css/SignUp.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import registerGambar from "/src/assets/gambar/signup.jpg";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cekPassword, setCekPassword] = useState("");
  const [error, setError] = useState("");
  const [sukses, setSukses] = useState("");
  const createData = async (e) => {
    e.preventDefault();

    if (cekPassword == password) {
      let config = {
        url: "https://api-remedial-production-ecd6.up.railway.app/api/users/signup",
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({
          username,
          email,
          password,
          role: "user",
        }),
      };

      try {
        let createData = await Axios(config);
        setSukses(createData.data);
      } catch (error) {
        setError(error.response.data);
      }
    }else{
      alert("Password tidak sama!!!");
    }
    useEffect(() => {}, [error, sukses]);
  }

  return (
    <div className="mid-signUp">
      <div className="inputSignUp">
        <h1>Sign Up</h1>
        <label>Nama</label>
        <input
          type="text"
          id="Nama"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Konfirmasi Password</label>
        <input
          type="password"
          id="cek-password"
          value={cekPassword}
          onChange={(e) => setCekPassword(e.target.value)}
        />

        <p>{error.message}</p>
        <p>{sukses.message}</p>
        <button className="tombolSignUp" type="submit" onClick={createData}>
          Sign Up
        </button>
      </div>
      <div className="signupGambar">
        <img src={registerGambar} alt="Register" />
      </div>
    </div>
  );
};

export default SignUp;
