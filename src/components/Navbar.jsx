import React, { useContext } from 'react';
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo/Logo.png";
import iconDown from "../assets/icon/icon-wrapper.png";
import hamburgerMenu from "../assets/icon/HamburgerMenu.png";
import { AuthContext } from './login/AuthContext';

const Navbar = () => {
  const { isLoggedIn, handleLogout, getUsernameFromCookie } = useContext(AuthContext);
  const username = getUsernameFromCookie();

  return (
    <nav >
      <NavLink to={"/"}>
        <img className="logo-remedial" src={Logo} alt="logo" />
      </NavLink>

      <ul className="navbar-new">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink>Program</NavLink>
        </li>
        <li>
          <NavLink>Kabar</NavLink>
        </li>
        <li>
          <NavLink>Tentang Kami</NavLink>
        </li>
        <li>
          <NavLink id="kelas">
            Kelas <img src={iconDown} alt="" />
          </NavLink>
          <ul className="dropdown-kelas">
            <li>
              <NavLink to="/KelasOffline" id="dropdown">Kelas Offline</NavLink>
            </li>
            <li>
              <NavLink to="/KelasOnline" id="dropdown">Kelas Online</NavLink>
            </li>
          </ul>
        </li>
        <li>
            {isLoggedIn ? (
            
            <NavLink className="afterlogin" to="/ViewProfile">{username}</NavLink>
            ) : (
              <NavLink to="/SignIn">Sign In</NavLink>
            )}
          
        </li>
        <li className="signUp">
            {!isLoggedIn ? (<NavLink to="/SignUp">Sign Up</NavLink>) : (
                    <>
                        <button className="buttonLogOut" onClick={handleLogout}><p>LogOut</p></button>
                    </>
                )}
        </li>
      </ul>

      <div className="main">
        <div className="bx bx-menu" id="menu-icon">
          <img src={hamburgerMenu} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
