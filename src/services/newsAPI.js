import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/news'; // Flask API URL

export const fetchNews = async () => {
  try {
    console.log("Fetching news from:", BASE_URL); // 디버깅 로그
    const response = await axios.get(BASE_URL);
    console.log("Fetched data:", response.data); // 응답 데이터를 출력
    return response.data;
  } catch (error) {
    console.error("Error in fetchNews:", error); // 에러 출력
    return []; // 실패 시 빈 배열 반환
  }
};
