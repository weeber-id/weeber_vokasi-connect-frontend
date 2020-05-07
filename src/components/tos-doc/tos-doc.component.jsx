import React from 'react';
import './tos-doc.styles.scss';

const Dokumentasi = ({ imgUrl, active = false }) => {
  return (
    <div className={`dokumentasi-component ${active ? 'active' : ''}`}>
      <img alt="" className="dokumentasi-component__logo" src={imgUrl} />
    </div>
  );
};

export default Dokumentasi;
