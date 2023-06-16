import React, { createContext, useState, useEffect } from 'react';

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('https://api-remedial-production-ecd6.up.railway.app/api/articles');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ArticleContext.Provider value={articles}>
      {children}
    </ArticleContext.Provider>
  );
};