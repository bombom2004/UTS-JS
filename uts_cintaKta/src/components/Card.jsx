import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div className="card">
      <h2>{value}+</h2>
      <p>{title}</p>
    </div>
  );
};

export default Card;
