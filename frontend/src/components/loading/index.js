import React from 'react';

import './index.scss';

const Loading = () => {
  return (
    <>
      <div className="overlay"></div>
      <div className="loading__container">
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
        <span>Mengirim Aspirasi, Harap Tunggu Sebentar...</span>
      </div>
    </>
  );
};

export default Loading;
