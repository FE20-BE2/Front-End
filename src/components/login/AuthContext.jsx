import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [, setCookie, removeCookie] = useCookies(["token", "username"]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const token = getCookie("token");
    const storedUsername = getCookie("username");

    if (token) {
      setIsLoggedIn(true);
    }

    if (storedUsername) {
      setUsername(storedUsername); // Set the username from the cookie
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.get(
        "https://userpass.tineijercamp.my.id/signin.php"
      );
      const users = response.data;

      // Find the user with matching email and password
      const matchedUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        // Set cookie with a 1-hour expiration
        const tokenExpiration = new Date(Date.now() + 60 * 60 * 1000);

        // Encode the username before saving it to the cookie
        const encodedUsername = encodeURIComponent(matchedUser.username);

        setCookie("token", "test", {
          path: "/",
          expires: tokenExpiration,
        });

        // Do not encode the username when setting the cookie value
        setCookie("username", matchedUser.username, {
          path: "/",
          expires: tokenExpiration,
        });

        // Set status login and store the user data in state
        setIsLoggedIn(true);
        setUser({ username: matchedUser.username });
        setError("");
      } else {
        window.alert("Email atau Password Salah");
      }
    } catch (error) {
      setError("Failed to login. Please try again later.");
    }
  };

  const handleLogout = () => {
    // Remove cookies and reset status login
    removeCookie("token");
    removeCookie("username");
    setIsLoggedIn(false);
    setUser(null);
  };

  const getUsernameFromCookie = () => {
    return getCookie("username");
  };

  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");
      if (cookie[0] === name) {
        return decodeURIComponent(cookie[1]);
      }
    }
    return null;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        handleLogin,
        handleLogout,
        getUsernameFromCookie,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
