import React, { useContext, useState } from "react";
import registerGambar from "/src/assets/gambar/signup.jpg";
import "/src/css/SignUp.css";
import { useEmailContext } from "./EmailContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { setUsername, username, setEmail,email, setOtp, setPassword,password, setIsSignedUp } = useEmailContext();
  const [cekPassword, setCekPassword] = useState("");
  const [error, setError] = useState("");
  const [sukses, setSukses] = useState("");
  const navigate = useNavigate();

  const generateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 900);
    return otp.toString();
  };

  const createData = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !cekPassword) {
      setError("All fields are required.");
      return;
    }

    if (cekPassword !== password) {
      alert("Password tidak sama!!!");
      return;
    }

    const otp2 = generateOTP();
    setOtp(otp2);
    let ebody = `
      Kode OTP Anda adalah: ${otp2}
    `;

    
    Email.send({
      SecureToken: "46fb2197-bf57-4e2e-8df2-5e3b21f6d8a1", 
      To: email,
      From: "no-reply@tineijercamp.my.id",
      Subject: "Kode OTP Akun",
      Body: ebody,
    })
      .then((message) => {
        console.log("Email sent successfully:", message);
        setEmail(email);
        setError("");
        setSukses("Account created successfully. Check your email for OTP.");
        setIsSignedUp(true); 
        navigate("/Otp");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <div className="mid-signUp">
        <div className="inputSignUp">
          <h1>Sign Up</h1>
          <label>Nama</label>
          <input type="text" id="Nama" value={username} onChange={(e) => setUsername(e.target.value)} />

          <label>Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label>Konfirmasi Password</label>
          <input type="password" id="cek-password" value={cekPassword} onChange={(e) => setCekPassword(e.target.value)} />

          {error && <label>{error}</label>}
          {sukses && <p>{sukses}</p>}
          <button className="tombolSignUp" type="submit" onClick={createData}>
            Sign Up
          </button>
        </div>
        <div className="signupGambar">
          <img src={registerGambar} alt="Register" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
