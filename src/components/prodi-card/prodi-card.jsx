import React from 'react';
import './prodi-card.styles.scss';

const ProdiCard = ({ svgUrl, title }) => {
  return (
    <div className="prodi-card">
      <div className="prodi-card__title">
        <h3 style={{ color: '#395f7d' }} className="heading-tertiary">
          {title}
        </h3>
      </div>
      <div className="prodi-card__logo">
        <img src={svgUrl} alt="" className="prodi-card__img" />
      </div>
    </div>
  );
};

export default ProdiCard;
