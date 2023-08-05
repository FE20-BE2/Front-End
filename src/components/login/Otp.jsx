
import React, { useContext, useEffect, useState } from "react";
import "/src/css/Otp.css";
import { useEmailContext } from "./EmailContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext2";

const Otp = () => {
  const { email, otp, username, password, isSignedUp } = useEmailContext();
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [sukses, setSukses] = useState("");
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    
    if (!isSignedUp) {
      // If the user hasn't signed up, redirect back to SignUp page
      navigate("/SignUp");
    }

    const inputFields = document.querySelectorAll("input.field");

    inputFields.forEach((field) => {
      field.addEventListener("input", handleInput);
    });

    return () => {
      inputFields.forEach((field) => {
        field.removeEventListener("input", handleInput);
      });
    };
  }, [isSignedUp, navigate]);

  async function verifyOtp(enteredOtp) {
    if (enteredOtp === otp) {
      setError("");
      setSukses("OTP verification successful.");
      navigate("/SignIn");
      await signup({ email, username, password });
      // Update the API data to set the validation to true
    } else {
      setError("Invalid OTP. Please try again.");
      setSukses("");
    }
  }

  function handleInput(e) {
    let inputField = e.target;
    let index = Array.from(inputField.parentNode.children).indexOf(inputField);

    if (inputField.value.length >= 1) {
      let nextField = inputField.nextElementSibling;
      if (nextField) {
        nextField.focus();
      } else {
        // If all OTP fields are filled, trigger the API call
        const enteredOtp = otpValues.join("");
        verifyOtp(enteredOtp);
      }
    }

    const newValue = inputField.value.slice(0, 1); // Only take the first character
    setOtpValues((prevOtpValues) => {
      const updatedOtpValues = [...prevOtpValues];
      updatedOtpValues[index] = newValue;
      return updatedOtpValues;
    });
  }

  return (
    <>
    <div className="grid-container23">
      <div className="container23">
        <h3 className="title">OTP Verification</h3>
        <p className="sub-title">
          Enter the OTP you received to
          <span className="email">{email}</span>
        </p>
        <div className="wrapper">
          {otpValues.map((value, index) => (
            <input
              key={index}
              type="text"
              className={`field ${index + 1}`}
              maxLength="1"
              value={value}
              onChange={handleInput}
            />
          ))}
        </div>
        {error && <p>{error}</p>}
        {sukses && <p>{sukses}</p>}
        
      </div>
    </div>
    </>
  );
};

export default Otp;
