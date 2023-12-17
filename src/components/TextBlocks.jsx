import React, { useState } from 'react';

const TextBlocks = ({ texts }) => {
  const [visibleTextIndex, setVisibleTextIndex] = useState(null);

  const handleToggleText = (index) => {
    if (index === visibleTextIndex) {
      setVisibleTextIndex(null);
    } else {
      setVisibleTextIndex(index);
    }
  };

  return (
    <div>
      {texts.map((text, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
          <button onClick={() => handleToggleText(index)}>Показать текст</button>
          {visibleTextIndex === index && <p>{text}</p>}
        </div>
      ))}
    </div>
  );
};

export default TextBlocks;