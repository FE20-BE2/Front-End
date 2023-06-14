import React from "react";
import "../css/navbar.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Logo from '../assets/logo/Logo.png';
import iconDown from '../assets/icon/icon-wrapper.png'
import hamburgerMenu from '../assets/icon/HamburgerMenu.png'
// import KelasOffline from "../components/Kelasoffline"
// import KelasOnline from "../components/KelasOnline"

function Navbar() {
  return (
    <BrowserRouter>
        <nav>
            <NavLink><img className="logo" src={Logo} alt="logo" /></NavLink>

            <ul className="navbar">
                <li><NavLink>Home</NavLink></li>
                <li><NavLink>Program</NavLink></li>
                <li><NavLink>Kabar</NavLink></li>
                <li><NavLink path="/kelasonline">Tentang Kami</NavLink></li>
                <li><NavLink id="kelas">Kelas <img src={iconDown} alt="" /></NavLink>
                    <ul className="dropdown">
                        <li><NavLink id="dropdown">Kelas Offline</NavLink></li>
                        <li><NavLink id="dropdown">Kelas Online</NavLink></li>
                    </ul>
                </li>
                <li><NavLink>Sign In</NavLink></li>
                <li className="signUp"><NavLink>Sign Up</NavLink></li>
            </ul>

            <div className="main">
                <div className="bx bx-menu" id="menu-icon">
                    <img src={hamburgerMenu} alt="" />
                </div>
            </div>
        </nav>
    </BrowserRouter>
  )
}

export default Navbar