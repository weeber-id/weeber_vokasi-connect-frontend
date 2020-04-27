import React from 'react';

const ArtikelCard = () => {
  return (
    <div className="artikel-card">
      <div className="artikel-card__thumbnail"></div>
      <div className="artikel-card__preview">
        <h3 className="artikel-card__title">Ini judul artikel bre</h3>
        <h4 className="artikel-card__date">29 Februari 2020</h4>
        <p className="artikel-card__content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
          perspiciatis minus quia sunt ut doloribus soluta praesentium ipsum,
          vel incidunt nisi quo, reiciendis culpa laudantium architecto
          cupiditate dolorem atque obcaecati!
        </p>
      </div>
    </div>
  );
};

export default ArtikelCard;
