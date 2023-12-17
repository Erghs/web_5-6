import React, { useState } from 'react';

const ShowMoreText = ({ text }) => {
  const [showFullText, setShowFullText] = useState(false);

  const firstSentence = text.split('. ')[0];
  const fullText = text;

  const handleShowMoreClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <p>{showFullText ? fullText : firstSentence}</p>
      <button onClick={handleShowMoreClick}>
        {showFullText ? 'Скрыть подробности' : 'Показать подробнее'}
      </button>
    </div>
  );
};

export default ShowMoreText;