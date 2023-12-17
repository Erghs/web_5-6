import React, { useState } from 'react';

const Button = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Скрыть' : 'Показать'}
      </button>
      {isVisible && <p>Фокус</p>}
    </div>
  );
};

export default Button;