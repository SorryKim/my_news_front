import React, { useEffect, useState } from 'react';
import fetchNews from '../services/newsAPI'; // 기본 내보내기로 가져오기

function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    loadNews();
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      {news.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h2>{item.title}</h2>
          <p>{item.summary}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
