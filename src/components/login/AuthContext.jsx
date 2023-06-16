import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [, setCookie, removeCookie] = useCookies(['token']);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      // Validasi token atau lakukan permintaan API untuk mendapatkan informasi pengguna dengan token
      // Contoh sederhana di sini hanya mengatur status login sebagai true
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('https://api-remedial-production-ecd6.up.railway.app/api/users/signin', {
        email,
        password
      });
      const { token, username } = response.data;

      // Set cookie dengan masa berlaku selama 1 jam
      setCookie('token', token, { path: '/', expires: new Date(Date.now() + 60 * 60 * 1000) });
      setUsernameToCookie(username);

      // Set status login
      setIsLoggedIn(true);
      setUser(userData);
    } catch (error) {
      console.error('Failed to login. Please check your credentials.');
    }
  };

  const handleLogout = () => {
    // Hapus cookie dan reset status login
    removeCookie('token');
    removeCookie('username');
    setIsLoggedIn(false);
    setUser(null);
  };

  const setUsernameToCookie = (username) => {
    setCookie('username', username, { path: '/', expires: new Date(Date.now() + 60 * 60 * 1000) });
  };

  const getUsernameFromCookie = () => {
    return getCookie('username');
  };

  const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split('=');
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return null;
  };

  

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, handleLogin, handleLogout, getUsernameFromCookie }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);

