import React, { useState } from 'react';

const DropdownButton = ({ buttonText, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={handleButtonClick}>{buttonText}</button>
      {isOpen && (
        <ul>
          {subItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;