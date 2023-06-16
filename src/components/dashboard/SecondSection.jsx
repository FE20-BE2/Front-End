import React from "react";
import "/src/css/SecondSection.css";

function SecondSection() {
  return (
    <section>
      <div className="tentang-kami">
        <div className="tentang-kami-foto">
          <div className="tentang-kami-image">
            <img
              src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/posterlogo.png"
              alt=""
            />
          </div>
        </div>
        <div className="tentang-kami-desc">
          <p className="tentang-kami-desc-p1">Tentang Kami</p>
          <h2>Remedial</h2>
          <p className="tentang-kami-desc-p3">
            Remedial merupakan program yang Serrum lakukan selama 6 bulan di
            awal tahun ajaran baru. Kegiatan ini melibatkan murid SMA (pilihan)
            di Jakarta dan sekitarnya yang berfokus pada pola menggali minat
            siswa dalam mencari pengetahuan sesuai dengan konteks anak dan
            zamannya.
          </p>
          <a href="#" className="tentang-kami-button">
            <button>Learn More</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
