import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { fetchNews } from '../services/newsAPI';

function NewsList() {
  const [news, setNews] = useState([]); // 뉴스 데이터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        console.log("News fetched in React:", data); // 디버깅 로그
        setNews(data);
        setLoading(false);
      } catch (err) {
        console.error("Error in NewsList:", err);
        setError("Failed to load news");
        setLoading(false);
      }
    };
    loadNews();
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Latest News</h1>
      {news.length > 0 ? (
        news.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))
      ) : (
        <p>No news available.</p>
      )}
    </div>
  );
}

export default NewsList;
