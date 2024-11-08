import React from 'react';

function NewsCard({ title, link, source }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{title}</h3>
      <p>Source: {source}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}

export default NewsCard;
