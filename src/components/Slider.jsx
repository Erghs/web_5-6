import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button onClick={goToPrevSlide}>Назад</button>
      <img src={images[currentSlide]} alt="Slide" className="slide"/>
      <button onClick={goToNextSlide}>Вперед</button>
    </div>
  );
};

export default Slider;