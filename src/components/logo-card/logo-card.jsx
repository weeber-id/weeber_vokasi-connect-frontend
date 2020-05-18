import React from 'react';

const LogoCard = ({ Component, text }) => (
  <div className="filosofi__card">
    <Component height="20rem" width="20rem" />
    <p style={{ color: 'white' }} className="text-align-center text">
      {text}
    </p>
  </div>
);

export default LogoCard;
