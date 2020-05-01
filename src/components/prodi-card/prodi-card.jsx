import React from 'react';
import './prodi-card.styles.scss';
const ProdiCard = ({ svgUrl, title, active = false }) => {
  return (
    <div className={`prodi-card ${active ? 'active' : ''}`}>
      <h5 style={{ color: 'navy' }} className="text mt-sm">
        {title}
      </h5>
      <img src={svgUrl} alt="" className="prodi-card__img" />
    </div>
  );
};

export default ProdiCard;
