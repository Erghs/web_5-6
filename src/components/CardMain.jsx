import React, { useState } from 'react';
import Card from './Card';

const CardMain = () => {
  const [visibleCards, setVisibleCards] = useState(2);
  const allCards = [
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
    { id: 4, title: 'Card 4' },
    // ... другие карточки
  ];

  const handleShowMoreClick = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 2);
  };

  return (
    <div>
      <h1>Примеры карточек</h1>
      {allCards.slice(0, visibleCards).map(card => (
        <Card key={card.id} title={card.title} />
      ))}
      {visibleCards < allCards.length && (
        <button onClick={handleShowMoreClick}>Показать ещё</button>
      )}
    </div>
  );
};

export default CardMain;