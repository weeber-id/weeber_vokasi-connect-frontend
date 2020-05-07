import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logos/logo.svg';

const HeaderDropdown = ({ type }) => {
  const [hiddenDropDown, setHiddenDropDown] = useState(true);

  if (type === 'info-vokasi') {
    return (
      <div className="profil-dropdown">
        <Link
          className="profil-dropdown__link"
          to="/info-vokasi/ruang-prestasi"
        >
          <span className="profil-dropdown__item">Ruang Prestasi</span>
        </Link>
        <Link className="profil-dropdown__link" to="/info-vokasi/info-prodi">
          <span className="profil-dropdown__item">Info Prodi</span>
        </Link>
        <Link
          className="profil-dropdown__link"
          to="/info-vokasi/triumph-of-spartan"
        >
          <span className="profil-dropdown__item">Triumph of Spartans</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="profil-dropdown">
      <Link className="profil-dropdown__link" to="/profil-organisasi/visi-misi">
        <span className="profil-dropdown__item">Visi dan Misi</span>
      </Link>
      <Link className="profil-dropdown__link" to="/profil-organisasi/logo">
        <span className="profil-dropdown__item">Logo</span>
      </Link>
      <Link
        className="profil-dropdown__link"
        to="/profil-organisasi/pengurus-inti"
      >
        <span className="profil-dropdown__item">Pengurus Inti</span>
      </Link>
      <Link className="profil-dropdown__link" to="/profil-organisasi/keuangan">
        <span className="profil-dropdown__item">Keuangan</span>
      </Link>
      <Link
        className="profil-dropdown__link"
        to="/profil-organisasi/kesekretariatan"
      >
        <span className="profil-dropdown__item">Kesekretariatan</span>
      </Link>
      <Link
        onMouseOver={() => {
          setHiddenDropDown(false);
        }}
        onMouseLeave={() => {
          setHiddenDropDown(true);
        }}
        className="profil-dropdown__link"
        to="/profil-organisasi/sospol"
      >
        <span className="profil-dropdown__item">Sospol</span>

        {/* sub dropdown menu sospol */}

        {hiddenDropDown ? null : (
          <div className="sub-dropdown">
            <Link
              className="sub-dropdown__link"
              to="/profil-organisasi/sospol/sosmaling"
            >
              <span className="profil-dropdown__item">Sosmaling</span>
            </Link>
            <Link
              className="sub-dropdown__link"
              to="/profil-organisasi/sospol/adkesma"
            >
              <span className="profil-dropdown__item">Adkesma</span>
            </Link>
            <Link
              className="sub-dropdown__link"
              to="/profil-organisasi/sospol/kastrat"
            >
              <span className="profil-dropdown__item">Kastrat</span>
            </Link>
          </div>
        )}
      </Link>
      <Link
        className="profil-dropdown__link"
        to="/profil-organisasi/kemahasiswaan"
      >
        <span className="profil-dropdown__item">Kemahasiswaan</span>
      </Link>
      <Link className="profil-dropdown__link" to="/profil-organisasi/internal">
        <span className="profil-dropdown__item">Internal</span>
      </Link>
      <Link className="profil-dropdown__link" to="/profil-organisasi/kki">
        <span className="profil-dropdown__item">KKI</span>
      </Link>
    </div>
  );
};

const Header = ({ className = '', color }) => {
  const [profilHidden, setProfilHidden] = useState(true);
  const [hiddenInfo, setHiddenInfo] = useState(true);

  const headerClass = ['header'];

  if (color === 'navy') headerClass.push('header--navy');
  if (color === 'green') headerClass.push('header--green');
  if (color === 'yellow') headerClass.push('header--yellow');
  if (color === 'tos') headerClass.push('header--tos');
  if (color === 'white') headerClass.push('header--white');
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
          <Link className="header__item" to="/artikel">
            <span>Artikel</span>
          </Link>
          <Link className="header__item" to="/event">
            <span>Event</span>
          </Link>
          <Link className="header__item" to="/lembaga-vokasi-ui">
            <span>Lembaga Vokasi UI</span>
          </Link>
          <Link className="header__item" to="/data-publik">
            <span>Data Publik</span>
          </Link>
          <Link
            onMouseOver={() => {
              setProfilHidden(false);
            }}
            onMouseLeave={() => {
              setProfilHidden(true);
            }}
            className="header__item"
            to="/profil-organisasi"
          >
            <span>Profil BEM Vokasi UI</span>
            {profilHidden ? null : <HeaderDropdown />}
          </Link>
          <Link
            onMouseOver={() => {
              setHiddenInfo(false);
            }}
            onMouseLeave={() => {
              setHiddenInfo(true);
            }}
            className="header__item"
            to="/info-vokasi"
          >
            <span>Info Vokasi</span>
            {hiddenInfo ? null : <HeaderDropdown type="info-vokasi" />}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
