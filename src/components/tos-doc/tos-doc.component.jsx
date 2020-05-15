import React from 'react';
import './tos-doc.styles.scss';

const Dokumentasi = ({ imgUrl }) => {
  return (
    <div className="dokumentasi-component">
      <img alt="" className="dokumentasi-component__logo" src={imgUrl} />
    </div>
  );
};

export default Dokumentasi;
