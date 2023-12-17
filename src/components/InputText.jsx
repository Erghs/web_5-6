import React, { useState } from 'react';

const InputText = ({ min, max }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (min && value.length < min) {
      alert("Вам нужно ввести минимум ${min} символа");
    } else if (max && value.length > max) {
      alert("Нельзя ввести больше чем ${max} символов");
    } else {
      setInputValue(value);
    }
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default InputText;
