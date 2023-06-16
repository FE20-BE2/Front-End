import React, { useState, useEffect } from "react";

import "/src/css/FourSection.css";

function FourSection() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api-remedial-production-ecd6.up.railway.app/api/articles/latest?limit=3"
        );
        const jsonData = await response.json();
        setData(jsonData.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section className="four-section">
        <div className="berita-seni-judul">
          <h1>Berita Seni Terkini</h1>
          <p>
            Kabar Terakhir dari Sumber Terpercaya, Kami Hadirkan untuk Kamu!
          </p>
        </div>
        <div className="berita-grid">
          {data.map((item) => (
            <div key={item._id} className="flex-container-berita">
              <div className="flex-items-berita">
                <div className="flex-items-berita-image">
                  <img src={item.articleImgUrl} alt="" />
                </div>
                <div className="flex-items-berita-image-desc">
                  <div className="flex-items-berita-time">
                    <img
                      src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/access-time.png"
                      alt="time"
                    />
                    <span>{item.releaseDate}</span>
                  </div>
                  <div className="flex-items-berita-judul">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="flex-items-berita-button">
                    <a href="#">
                      <button>Lihat Berita</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-items-berita-button-all">
          <a href="#">
            <button>
              View All{" "}
              <img
                src="https://childless-bypass.000webhostapp.com/wp-content/uploads/2023/03/Vector.png"
                alt=""
              />
            </button>
          </a>
        </div>
      </section>
    </>
  );
}

export default FourSection;
