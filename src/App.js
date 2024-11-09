// src/App.js
import React from 'react';
import NewsList from './components/NewsList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>김죄송의 뉴스모음</h1>
      <NewsList />
    </div>
  );
}

export default App;
