import React from 'react';
import './tos-carousel.styles.scss';

const TosCarousel = ({ active = false, id, imgUrl }) => {
  return (
    <div className={`carousel-item ${active ? 'active' : ''}`}>
      <img alt="" className="carousel-item__logo" src={imgUrl} />
    </div>
  );
};

export default TosCarousel;
