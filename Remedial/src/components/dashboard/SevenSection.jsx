import "/src/css/SevenSection.css";
// import { fetchData } from "/src/js/api/api.js";
import React, { useEffect, useState } from "react";

function SevenSection() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('https://api-remedial-production-ecd6.up.railway.app/api/articles/latest?limit=3');
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
    <section className="seven-section">
      <h1>Artikel Terbaru</h1>
      {data.map((item) => (
        <div key={item._id} className="container">
          <div className="desc">
            <div className="heading">
              <div className="info">
                <p>Admin</p>
                <p>{item.releaseDate}</p>
              </div>
              <h2>{item.title}</h2>
              <p className="desc-p">
                {item.content}
              </p>
              <div className="flex-seven">
                <p>{item.categoryDetails[0].categoryName}</p>
                <p>{item.timesRead}</p>
              </div>
            </div>
            <div className="gambar">
                <img src={item.articleImgUrl} alt="Article Image" />
            </div>
          </div>
          <div className="line"></div>
        </div>
      ))}
    </section>
  );
}

export default SevenSection;
