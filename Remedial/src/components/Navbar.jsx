import React from "react";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo/Logo.png";
import iconDown from "../assets/icon/icon-wrapper.png";
import hamburgerMenu from "../assets/icon/HamburgerMenu.png";
import { useCookies } from "react-cookie";

const Navbar = ({isLoggedIn, username}) => {
    const [cookies, , removeCookie] = useCookies(['token', 'username']); // Cek apakah terdapat token cookie
  const handleLogout = () => {
    // Hapus cookie dan muat ulang halaman
    removeCookie('token');
    removeCookie('username');
    window.location.reload();
  };

  return (
    <nav>
      <NavLink to={"/"}>
        <img className="logo" src={Logo} alt="logo" />
      </NavLink>

      <ul className="navbar">
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
          <ul className="dropdown">
            <li>
              <NavLink id="dropdown">Kelas Offline</NavLink>
            </li>
            <li>
              <NavLink id="dropdown">Kelas Online</NavLink>
            </li>
          </ul>
        </li>
        <li>
            {!isLoggedIn ? (<NavLink to="/SignIn">Sign In</NavLink>) : (
                <>
                    <NavLink to="/"><span className="afterlogin">{username}</span></NavLink>
                </>
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
