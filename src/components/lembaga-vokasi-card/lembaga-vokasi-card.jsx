import React from 'react';

const LembagaVokasiCard = ({ nama, src }) => {
  return (
    <div className="lembaga-lembaga__card">
      <div className="lembaga-lembaga__img-container">
        <img
          src={require('../../assets/logos/lembaga-vokasi/dpm-ui.jpg')}
          alt="dpm ui"
          className="lembaga-lembaga__img"
        />
      </div>
      <div className="lembaga-lembaga__nama-lembaga">
        <span>DPM VOKASI UI</span>
      </div>
    </div>
  );
};

export default LembagaVokasiCard;
