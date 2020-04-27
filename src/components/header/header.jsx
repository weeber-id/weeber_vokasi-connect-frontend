import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logos/logo.svg';

const Header = ({ className = '', color }) => {
  const headerClass = ['header'];

  if (color === 'navy') headerClass.push('header--navy');
  if (color === 'green') headerClass.push('header--green');
  if (className.length > 0) headerClass.push(className);

  return (
    <header>
      <nav className={headerClass.join(' ')}>
        <div className="header__logo">
          <Link to="/">
            <Logo fill="white" height="8rem" width="8rem" />
          </Link>
        </div>
        <div className="header__items">
          <Link className="header__item" to="/">
            <span>Beranda</span>
          </Link>
          <span className="header__item">Artikel</span>
          <span className="header__item">Event</span>
          <span className="header__item">Lembaga Vokasi UI</span>
          <span className="header__item">Data Publik</span>
          <span className="header__item">Profil BEM Vokasi UI</span>
          <span className="header__item">Info Vokasi</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
