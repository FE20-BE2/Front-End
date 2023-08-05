import "/src/css/SevenSection.css";
// import { fetchData } from "/src/js/api/api.js";
import React from "react";
import artikel1 from "/src/assets/gambar/artikel1.png"
import artikel2 from "/src/assets/gambar/artikel2.png"
import artikel3 from "/src/assets/gambar/artikel3.png"

function SevenSection() {
    
  
  return (
    <section className="seven-section">
        <h1>Artikel Terbaru</h1>
        <div className="container">
          <div className="desc">
            <div className="heading">
              <div className="info"><p>Admin</p><p>9 Februari 2023</p></div>
              <h2>Memento Mori; Pameran Tunggal Prajna Puspa Arum.</h2>
              <p className="desc-p">Proses refleksi Prajna (pelajar SMA Kelas 12), proses penciptaan karya melalui projek ke dalam media gambar dan lukis. Prajna akan mempresentasikan bagaimana ia menerjemahkan pelbagai masalah remaja yang ia hadapi dengan merefleksikannya ke dalam bentuk gambar, goresan, teks. memento mori caranya untuk mengingat hal-hal apapun yang ia temui dalam kehidupan sehari-hari. </p>
              <div className="flex-seven"><p>Hello Siswa</p><p>10 min read</p></div>
            </div>
            <div className="gambar"><img src={artikel1} alt="" /></div>
          </div>
          <div className="line"></div>
        </div>
        <div className="container">
          <div className="desc">
            <div className="heading">
              <div className="info"><p>rianto rianto</p><p>14 Februari 2020</p></div>
              <h2>Diskusi Buku “The Ligthworkers” karya Hannah Brigitta.</h2>
              <p className="desc-p">Hannah Brigitta peserta program remedial menulis sebuah novel “The Lightworkers”. Novel “The Lightworkers” menjadi titik tolak Hannah menciptakan karya seni rupa dan berpameran di Gudskul. Ditulis sejak 2017 hingga 2020, Hannah mencoba menceritakan tentang perempuan indigo bernama Lisa Mahigawa. </p>
              <div className="flex-seven"><p>Kabar</p><p>15 min read</p></div>
            </div>
            <div className="gambar"><img src={artikel2} alt="" /></div>
          </div>
          <div className="line"></div>
        </div>
        <div className="container">
          <div className="desc">
            <div className="heading">
              <div className="info"><p>rianto rianto</p><p>24 Juli 2019</p></div>
              <h2>Ucok : “Gue Tahu Musik dari Tongkrongan”.</h2>
              <p className="desc-p">Anak muda khususnya pelajar pasti demen musik yang sedang berkembang saat ini. Sebagai pelajar di Jakarta gue juga lumayan ngikutin perkembangan musik khususnya musik underground yang belakangan ini sedang harum-harumnya di kalangan anak sekolahan. Mulai dari band-band yang umurnya cukup muda seperti Feast, The Panturas, Jason Ranti, Efek Rumah Kaca, dan Silampukau. </p>
              <div className="flex-seven"><p>Berita Seni</p><p>10 min read</p></div>
            </div>
            <div className="gambar"><img src={artikel3} alt="" /></div>
          </div>
          <div className="line"></div>
        </div>
      </section>
    
  );
}

export default SevenSection;
