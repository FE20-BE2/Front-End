import React from "react";
import "/src/css/FiveSection.css";

function FiveSection() {
  return (
    <section className="five-section">
        <div className="program-remedial-desc">
          <div className="program-remedial-judul">
            <h1>Program Remedial</h1>
            <p>
              Program belajar diselenggarakan online dan offline yang dapat
              membantu Anda memperoleh pengetahuan dan keterampilan baru
            </p>
          </div>
        </div>
        <div className="flex-container-program">
          <div className="flex-items-program">
            <div className="flex-items-program-image">
              <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/program1.jpg" alt="Remedial" />
            </div>
            <div className="flex-items-program-desc">
              <h2>Remedial Online</h2>
              <p>
                Metode pembelajaran dilakukan melalui jaringan internet yang
                dilakukan secara live atau asinkronus (tidak live)
              </p>
              <div className="flex-items-program-benefits">
                <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/benefit1.png" alt="benefit" />
                <p>Tersedia 10 Mata Pelajaran</p>
              </div>
              <div className="flex-items-program-benefits">
                <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/benefit2.png" alt="benefit" />
                <p>Belajar Lebih Fleksible</p>
              </div>
              <div className="flex-items-program-benefits">
                <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/benefit3.png" alt="benefit" />
                <p>Forum Diskusi Online</p>
              </div>
              <div className="flex-items-program-benefits">
                <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/benefit4.png" alt="benefit" />
                <p>Sertifikat</p>
              </div>
              <div className="flex-items-program-benefits-harga">
                <p>RP. 250.000</p>
              </div>
              <div className="flex-items-program-button">
                <a href="https://skilvul.com" id="link">Selengkapnya</a>
              </div>
            </div>
          </div>
          <div className="flex-items-program">
            <div className="flex-items-program-image">
              <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/program2.jpg" alt="Remedial" />
            </div>
            <div className="flex-items-program-desc">
              <h2>Remedial Offline</h2>
              <p>
                Metode pembelajaran dilakukan dengan interaksi langsung antara
                mentor dan siswa di ruang kelas
              </p>
              <div className="flex-items-program-benefits">
                <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/benefit1.png" alt="benefit" />
                <p>Tersedia 3 Mata Pelajaran</p>
              </div>
              <div className="flex-items-program-benefits">
                <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/benefit5.png" alt="benefit" />
                <p>Belajar di Ruang Kelas</p>
              </div>
              <div className="flex-items-program-benefits">
                <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/benefit3.png" alt="benefit" />
                <p>Interaksi Langsung dengan Mentor</p>
              </div>
              <div className="flex-items-program-benefits">
                <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/benefit4.png" alt="benefit" />
                <p>Sertifikat</p>
              </div>
              <div className="flex-items-program-benefits-harga">
                <p>RP. 550.000</p>
              </div>
              <div className="flex-items-program-button">
                <a href="https://skilvul.com" id="link">Selengkapnya</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default FiveSection;
