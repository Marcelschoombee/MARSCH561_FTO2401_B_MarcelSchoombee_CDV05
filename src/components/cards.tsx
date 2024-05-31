

import React from 'react';

interface CardProps {
  id: number;
  title: string;
  description: string;
  coverImg: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ title, description, coverImg, url }) => {
  return (
    <a href={url} className="card" target="_blank" rel="noopener noreferrer">
      <img 
        src={`./assets/${coverImg}`} 
        className="card--image" 
        alt={title}
      />
      <h4 className="card--title">{title}</h4>
      <p>{description}</p>
    </a>
  );
}

export default Card;