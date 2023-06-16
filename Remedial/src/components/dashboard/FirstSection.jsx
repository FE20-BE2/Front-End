import "/src/css/FirstSection.css";
import React, { useContext } from 'react';
import { AuthContext } from '../login/AuthContext';
import { NavLink } from "react-router-dom";

const FirstSection = () => {
  const { isLoggedIn, getUsernameFromCookie } = useContext(AuthContext);
  const username = getUsernameFromCookie();

  return (
    <section className="first-section">
      <div className="text-HeroBanner">
        <div className="hero-judul">
          
            {isLoggedIn ? (
              <>
                <h1>Hallo {username}! <br />Selamat Datang di Program Terbaik Kami. </h1>
                <p id="description">
                  Perluas pengetahuan dan keterampilan anda dengan program kami yang terdiri dari <br /> ribuan topik. dapatkan pembelajaran yang berkualitas dari para ahli dan kembangkan karir anda dari mana saja.
                </p>
              </>
            ) : (
              <>
                <h1>Ayo Bergabung Dengan Program Kami</h1>
                <p id="description">
                  Gabunglah bersama kami untuk mengasah kemampuan Anda yang terpendam.{" "}
                  <br />
                  Setiap langkah kecil membawa Anda lebih dekat pada tujuan Anda.
                </p>
              </>
            )}
          
        </div>
        <div id="text-HeroBanner-button">
          {isLoggedIn ? (
              <span></span>
            ) : (
              <NavLink to="SignIn">
                <button className="button">Daftar</button>
              </NavLink>
            )}
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
