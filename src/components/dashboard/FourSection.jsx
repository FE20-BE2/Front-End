import "/src/css/FourSection.css";
import kamengski from "/src/assets/gambar/kamengski.png"
import kotempo from "/src/assets/gambar/kotempo.png"
import pertemuan from "/src/assets/gambar/pertemuan.png"

function FourSection() {
  

  return (

      <section className="four-section">
        <div className="berita-seni-judul">
          <h1>Berita Seni Terkini</h1>
          <p>
            Kabar Terakhir dari Sumber Terpercaya, Kami Hadirkan untuk Kamu!
          </p>
        </div>
        <div className="flex-container-berita">
          <div className="flex-items-berita">
            <div className="flex-items-berita-image">
              <img
                src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/ucok.png"
                alt=""
              />
            </div>
            <div className="flex-items-berita-image-desc">
              <div className="flex-items-berita-time">
                <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/access-time.png" alt="time" />
                <span>July 24, 2019</span>
              </div>
              <div className="flex-items-berita-judul">
                <h2>Ucok : “Gue Tahu Musik dari Tongkrongan”</h2>
              </div>
              <div className="flex-items-berita-button">
                <a href="#"><button>Lihat Berita</button></a>
              </div>
            </div>
          </div>
          <div className="flex-items-berita">
            <div className="flex-items-berita-image">
              <img src={kamengski} alt="" />
            </div>
            <div className="flex-items-berita-image-desc">
              <div className="flex-items-berita-time">
                <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/access-time.png" alt="time" />
                <span>February 15, 2019</span>
              </div>
              <div className="flex-items-berita-judul">
                <h2>Kamengski : Desain Itu Tribute dan Penghormatan</h2>
              </div>
              <div className="flex-items-berita-button">
                <a href="#"><button>Lihat Berita</button></a>
              </div>
            </div>
          </div>
          <div className="flex-items-berita">
            <div className="flex-items-berita-image">
              <img src={kotempo} alt="" />
            </div>
            <div className="flex-items-berita-image-desc">
              <div className="flex-items-berita-time">
                <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/access-time.png" alt="time" />
                <span>February 15, 2019</span>
              </div>
              <div className="flex-items-berita-judul">
                <h2>KontempoPedia : Kado untuk Kartini</h2>
              </div>
              <div className="flex-items-berita-button">
                <a href="#"><button>Lihat Berita</button></a>
              </div>
            </div>
          </div>
          <div className="flex-items-berita">
            <div className="flex-items-berita-image">
              <img src={pertemuan} alt="" />
            </div>
            <div className="flex-items-berita-image-desc">
              <div className="flex-items-berita-time">
                <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/access-time.png" alt="time" />
                <span>February 15, 2019</span>
              </div>
              <div className="flex-items-berita-judul">
                <h2>Pertemuan Ke Tujuh : Ngobrol Bareng OK Video</h2>
              </div>
              <div className="flex-items-berita-button">
                <a href="#"><button>Lihat Berita</button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-items-berita-button-all">
          <a href="#"
            ><button>View All <img src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/Vector.png" alt="" /></button>
          </a>
        </div>
      </section>

  );
}

export default FourSection;
