import React, { useState } from 'react';

const NewComponent = () => {
  const [countSecond, setCountSecond] = useState(0);
  const [countThird, setCountThird] = useState(0);
  const [countFourth, setCountFourth] = useState(1);

  const handleIncrement = () => {
    setCountSecond(countSecond + 1);
  };

  const handleIncrementByOne = () => {
    setCountThird(countThird + 1);
  };
  const handleIncrementByOne1= () => {
    setCountFourth(countFourth + 1);
  };

  const handleDecrementByOne = () => {
    setCountThird(countThird - 1);
  };

  const handleIncrementByFive = () => {
    setCountFourth(countFourth + 5);
  };

  const handleIncrementByTen = () => {
    setCountFourth(countFourth + 10);
  };

  const handleMultiply = () => {
    setCountFourth(countFourth * countFourth);
  };

  return (
    <div>
    <p>{countSecond}</p>
      <p>{countSecond < 10 ? "Count меньше 10" : "Count больше 10"}</p>
      <button onClick={handleIncrement}>Увеличить countSecond</button>

      <p>CountThird: {countThird}</p>
      <button onClick={handleIncrementByOne}>+1</button>
      <button onClick={handleDecrementByOne}>-1</button>

      <p>CountFourth: {countFourth}</p>
      <button onClick={handleIncrementByOne1}>+1</button>
      <button onClick={handleIncrementByFive}>+5</button>
      <button onClick={handleIncrementByTen}>+10</button>
      <button onClick={handleMultiply}>Умножить само на себя</button>
    </div>
  );
}

export default NewComponent;