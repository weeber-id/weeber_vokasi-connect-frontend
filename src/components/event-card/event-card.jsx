import React from 'react';

const EventCard = ({ active = false }) => {
  return (
    <div className={`event-card ${active ? 'active' : ''}`}>
      <img
        src={require('../../assets/icons/twitter.svg')}
        alt=""
        className="event-card__img"
      />
      <h5 style={{ color: 'white' }} className="text mt-sm">
        Bina Desa
      </h5>
    </div>
  );
};

export default EventCard;
