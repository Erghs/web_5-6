import React from 'react';

const Card = ({ title }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{title}</h3>
      <p>Дополнительная информация о карточке</p>
    </div>
  );
};

export default Card;