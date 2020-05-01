import React from 'react';
import './prodi-card.styles.scss';
const ProdiCard = ({ svgUrl, title }) => {
  return (
    <div className="prodi-card">
      <h5 style={{ color: '#395f7d' }} className="text mt-sm">
        {title}
      </h5>
      <img src={svgUrl} alt="" className="prodi-card__img" />
    </div>
  );
};

export default ProdiCard;
