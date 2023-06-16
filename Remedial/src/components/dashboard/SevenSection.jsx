import "/src/css/SevenSection.css";
// import { fetchData } from "/src/js/api/api.js";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

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
        <div key={item._id} className="container-new">
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
              <Link to={`/Artikel/${item._id}`}><p className="readMore">Read More....</p></Link>
            </div>
            <div className="gambar">
                <img src={item.articleImgUrl} alt="Article Image" />
            </div>
          </div>
          <div className="line"></div>
        </div>
      ))}
      <NavLink to="/AllArtikel"><div className="readMoreMid"><p className="readAll">Read All Article</p></div></NavLink>
      
    </section>
  );
}

export default SevenSection;
