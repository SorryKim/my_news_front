import axios from 'axios';

const fetchNews = async () => {
  const BASE_URL = 'http://localhost:5000/api/news'; // Flask 서버 URL
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error in fetchNews:", error);
    throw error;
  }
};

// 기본 내보내기
export default fetchNews;
