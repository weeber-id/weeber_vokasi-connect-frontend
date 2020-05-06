import React from 'react';
import './tos-card.styles.scss';

const TosCard = ({ imgUrl, title, desc }) => {
  return (
    <div className="tos-card">
      <img className="tos-card__logo" src={imgUrl} alt="" />
      <h2 className="heading-secondary" style={{ color: '#fff' }}>
        {title}
      </h2>
      <p
        style={{ color: '#fff' }}
        className="heading-tertiary text-align-center"
      >
        {desc}
      </p>
    </div>
  );
};

export default TosCard;
