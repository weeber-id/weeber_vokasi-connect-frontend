import React from 'react';

import { ReactComponent as Logo } from '../../assets/logos/logo.svg';

const Header = () => {
  return (
    <nav className="header">
      <div className="header__logo">
        <Logo fill="white" height="8rem" width="8rem" />
      </div>
      <div className="header__items">
        <span className="header__item">Beranda</span>
        <span className="header__item">Artikel</span>
        <span className="header__item">Event</span>
        <span className="header__item">Lembaga Vokasi UI</span>
        <span className="header__item">Data Publik</span>
        <span className="header__item">Profil BEM Vokasi UI</span>
        <span className="header__item">Info Vokasi</span>
      </div>
    </nav>
  );
};

export default Header;
