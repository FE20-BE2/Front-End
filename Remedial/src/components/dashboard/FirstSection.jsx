import React from "react";
import "/src/css/FirstSection.css";

function FirstSection() {
  return (
    <section className="first-section">
      <div className="text-HeroBanner">
        <div className="hero-judul">
          <h1>Ayo Bergabung Dengan Program Kami</h1>
          <p id="description">
            Gabunglah bersama kami untuk mengasah kemampuan Anda yang terpendam.{" "}
            <br />
            Setiap langkah kecil membawa Anda lebih dekat pada tujuan Anda.
          </p>
        </div>
        <div id="text-HeroBanner-button">
          <a href="https://skilvul.com">
            <button className="button">Daftar</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
