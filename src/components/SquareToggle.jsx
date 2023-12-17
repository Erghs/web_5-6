import React, { useState } from 'react';

const SquareToggle = () => {
  const [isGreenVisible, setIsGreenVisible] = useState(true);
  const [isRedVisible, setIsRedVisible] = useState(false);

  const toggleSquares = () => {
    setIsGreenVisible(!isGreenVisible);
    setIsRedVisible(!isRedVisible);
  };

  return (
    <div className="square">
      {isGreenVisible && <div style={{ width: '100px', height: '100px', backgroundColor: 'green' }} onClick={toggleSquares}></div>}
      {isRedVisible && <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }} onClick={toggleSquares}></div>}
      <div style={{ width: '100px', height: '100px', backgroundColor: 'blue', marginLeft: '20px'}}></div>
    </div>
  );
};

export default SquareToggle;