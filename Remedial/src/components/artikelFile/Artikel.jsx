import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./css/artikel-new.css"
import Footer from "/src/components/kelas/Footer";

import user from "/src/assets/icon/user.png";
import date from "/src/assets/icon/date.png";
import time from "/src/assets/icon/time.png";
import kategori from "/src/assets/icon/category.png";

const Artikel = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  const fetchArticle = async () => {
    try {
      const response = await axios.get(`https://api-remedial-production-ecd6.up.railway.app/api/articles/${id}`);
      console.log(response.data);
      setArticle(response.data.data[0]);
     
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    console.log(article)
  }, [article, id]);

  useEffect(() =>{
    fetchArticle();
    
  },[])

  if (!article) {
    return <div>Loading...</div>;
  }

  const category = article.categoryDetails?.[0]?.categoryName || '';

  return (
    <>
    <div className='artikel-middle'>
      
        <h1 className='artikel-left-h1'>Artikel</h1>
        <img className='artikel-left-img' src={article.articleImgUrl} alt="Article" />
        <div className='artikel-time'>
          <div className='artikel-left-info'>
            <p> <img src={user} alt="User" /> {article.author}</p>
            <p> <img src={date} alt="Date" /> {article.releaseDate}</p>
          </div>
          <div className='artikel-left-info2'>
            <p> <img src={time} alt="Time" /> {article.timesRead}</p>
            <p> <img src={kategori} alt="Category" /> {category}</p>
          </div>
        </div>
        
        <h1 className='artikel-left-h1'>{article.title}</h1>
        <p className='artikel-content'>{article.content}</p>
        
      </div>
    <Footer />
    </>
  );
};

export default Artikel;