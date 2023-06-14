import React from "react";
import "/src/css/ThirdSection.css";

function ThirdSection() {
  return (
    <section className="third-section">
        <div className="text-Keunggulan">
          <div className="keunggulan-judul">
            <h1>Kenapa Bergabung dengan Kami?</h1>
            <p className="keunggulan-desc">
              Ayo, jangan ragu untuk bergabung dengan kami, kami akan membantu
              anda untuk mencapai tujuan
            </p>
          </div>
          <div className="flex-container">
            <div className="flex-items">
              <div className="flex-items-circle">
                <img
                  src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/RatingMentor.png"
                  alt="RatingMentor"
                />
              </div>
              <div className="flex-items-text">
                <h2>Expert Mentor</h2>
                <p>Kami memiliki mentor yang ahli</p>
              </div>
            </div>
            <div className="flex-items">
              <div className="flex-items-circle">
                <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/Quality.png" alt="RatingMentor" />
              </div>
              <div className="flex-items-text">
                <h2>Sertifikat</h2>
                <p>Siswa akan mendapatkan sertifikat kelulusan</p>
              </div>
            </div>
            <div className="flex-items">
              <div className="flex-items-circle">
                <img
                  src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/Dialogue.png"
                  alt="RatingMentor"
                />
              </div>
              <div className="flex-items-text">
                <h2>Konsultasi</h2>
                <p>Kami akan memberikan konsultasi gratis</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default ThirdSection;
