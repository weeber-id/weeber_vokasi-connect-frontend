import React from 'react';

const EventCard = ({ active = false, url, title, image }) => {
  return (
    <div
      onClick={() => {
        window.open(url, '_blank');
      }}
      className={`event-card ${active ? 'active' : ''}`}
    >
      <img src={image} className="event-card__img" />
      <h5 style={{ color: 'white' }} className="text text-align-center mt-sm">
        {title}
      </h5>
    </div>
  );
};

export default EventCard;
