import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from "./components/login/SignUp"
import SignIn from "./components/login/SignIn"
import { useEffect } from "react";
import { useState } from 'react';
import { useCookies } from 'react-cookie';

function App() {

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "./src/js/script.js";

    script.async = true;

    script.crossOrigin = "anonymous";

    document.body.appendChild(script);

    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script);
    };
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['token', 'username']);

  useEffect(() => {
    // Cek apakah token ada dalam cookie
    if (cookies.token && cookies.username && !isLoggedIn) {
      setIsLoggedIn(true);
      setUsername(cookies.username);
    }
  }, [cookies, isLoggedIn]);

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUsername(name);

    const expirationDate = new Date(Date.now() + 60 * 60 * 1000);
    setCookie('token', 'your-token-value', { path: '/', expires: expirationDate });
    setCookie('username', name, { path: '/', expires: expirationDate });
  };

  const handleLogout = () => {
    // Hapus cookie dan muat ulang halaman
    removeCookie('token');
    removeCookie('username');
    window.location.reload();
  };

  return (
      <Router>
        <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout}/>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </Router>
  );
}

export default App;
