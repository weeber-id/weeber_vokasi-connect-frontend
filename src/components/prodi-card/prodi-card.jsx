import React from 'react';
import './prodi-card.styles.scss';

const ProdiCard = ({ svgUrl, title, linkUrl }) => {
  return (
    <a
      href={linkUrl}
      style={{ textDecoration: 'none' }}
      target="blank"
      rel="noopener noreferrer"
      className="prodi-card__link"
    >
      <div className="prodi-card">
        <div className="prodi-card__title">
          <h3 style={{ color: '#395f7d' }} className="heading-secondary">
            {title}
          </h3>
        </div>
        <div className="prodi-card__logo">
          <img src={svgUrl} alt="" className="prodi-card__img" />
        </div>
      </div>
    </a>
  );
};

export default ProdiCard;
